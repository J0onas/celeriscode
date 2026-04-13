# 🚀 Guía Completa: Conectar Formulario Netlify → Notion con n8n

## Paso 1: Configurar tu Base de Notion

Tu pipeline actual tiene estas columnas:
- `Nombre` (Title)
- `Estado` (Select: Nuevo, Contactado, En negociación, Cerrado)
- `Fecha de contacto` (Date)
- `Prioridad` (Select: Alta ($$$), Media ($$), Baja ($))
- `Próxima Acción` (Text)
- `Telefono` (Phone number)

### Columnas adicionales que debes agregar:

Para que funcione con el formulario, agrega estas columnas a tu base:

| Columna | Tipo | Descripción |
|---------|------|-------------|
| `Email` | Email | Email del lead |
| `Empresa` | Text | Nombre de la empresa |
| `Servicio` | Select | Tipo de proyecto (Landing Page, Multipage, Ecommerce, SaaS) |
| `Presupuesto` | Select | Rango de presupuesto |
| `Mensaje` | Text | Descripción del proyecto |
| `Fuente` | Select | Cómo nos encontró (Google, Redes sociales, Recomendación, Blog) |

### Obtener el Database ID:

1. Abre tu base de Notion
2. La URL se ve así: `https://notion.so/your-workspace/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
3. Copia los 32 caracteres después del último `/` → ese es tu **Database ID**

---

## Paso 2: Instalar/Configurar n8n

### Opción A: n8n Cloud (Más fácil)
1. Ve a https://app.n8n.cloud
2. Crea cuenta gratuita (1,000 ejecuciones/mes)
3. Crea un nuevo workflow

### Opción B: n8n Self-hosted (Gratis, sin límites)
```bash
# Con Docker
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n

# Accede a http://localhost:5678
```

---

## Paso 3: Importar el Workflow

1. En n8n, ve a **Workflows** → **Import from File**
2. Sube el archivo `n8n-workflow.json` (está en `/public/`)
3. Se abrirá el workflow con 4 nodos conectados

---

## Paso 4: Configurar Credenciales

### 4.1: Notion API

1. Ve a https://www.notion.so/my-integrations
2. **Create new integration**
3. Ponle nombre: "Celeris Code CRM"
4. Copia el **Internal Integration Token**
5. Ve a tu base de Notion → **...** → **Connect to** → Selecciona tu integración
6. En n8n:
   - Clic en el nodo **"Crear Lead en Notion"**
   - En **Credentials** → **Create New** → **Notion API**
   - Pega el token

### 4.2: Configurar Database ID

En ambos nodos de Notion (**Verificar Email Duplicado** y **Crear Lead en Notion**):
- Reemplaza `TU_DATABASE_ID_AQUI` con tu Database ID real

---

## Paso 5: Configurar el Webhook en Netlify

### 5.1: Obtener URL del Webhook

1. En n8n, activa el workflow (toggle **Active** arriba a la derecha)
2. Clic en el nodo **"Webhook - Netlify Form"**
3. Copia la **Production URL** (se ve como: `https://tu-instancia.n8n.cloud/webhook/netlify-leads`)

### 5.2: Agregar Webhook en Netlify

1. Ve a Netlify → tu sitio → **Site settings**
2. **Build & deploy** → **Deploy notifications**
3. Ve a **Forms** → **Form notifications**
4. **Add notification** → **Outgoing webhook**
5. Pega la URL del webhook de n8n
6. Método: **POST**
7. Content type: **JSON**

### Alternativa: Usar Make/Zapier como intermediario

Si Netlify no permite webhooks directamente en forms:

1. Crea un scenario en Make con trigger **Webhook**
2. Cuando llegue una submission de Netlify (vía Forms trigger), envía a n8n
3. O conecta directamente Make → Notion (sin n8n)

---

## Paso 6: Probar

1. Llena el formulario en tu sitio: `/contacto`
2. En n8n, ve al workflow → **Executions**
3. Deberías ver una ejecución exitosa
4. Revisa tu base de Notion → debería aparecer el nuevo lead

---

## 🔧 Solución de Problemas

### El webhook no recibe datos
- Verifica que el formulario envía `form-name: contacto`
- Revisa que el método sea POST
- En n8n, usa la URL de **Test** para pruebas

### Notion da error de permisos
- Asegúrate de conectar la integración a la base (paso 4.1)
- Verifica que el token no haya expirado

### Campos no se mapean correctamente
- Revisa que los nombres de columnas en Notion coincidan EXACTAMENTE con los del workflow
- Sensible a mayúsculas: "Nombre" ≠ "nombre"

---

## 📊 Estructura del Workflow

```
[Webhook] → [Verificar Duplicado] → [Crear en Notion] → [Responder]
     ↓              ↓                      ↓
  Netlify      Busca email             Inserta lead
  envía datos  en Notion               con todos los campos
```

### Lógica de Prioridad Automática:
- Presupuesto `$5,000+` o `$3,000-$5,000` → **Alta ($$$)**
- Presupuesto `$1,500-$3,000` → **Media ($$)**
- Presupuesto `$500-$1,500` → **Baja ($)**

---

## 🎯 Siguientes Pasos (Opcional)

1. **Agregar email automático**: Cuando se cree un lead, envíale un email de confirmación
2. **Notificación a Slack/WhatsApp**: Alerta al equipo cuando llegue un lead de alta prioridad
3. **Actualizar estado**: Cuando agendes llamada, cambia estado a "Contactado"
4. **Dashboard**: Usa vistas de Notion (Kanban, Calendario, Timeline) para gestionar leads
