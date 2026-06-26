# Mipiú Espacios Múltiples — tu página web

Hola 👋 Esta carpeta es tu página web completa. Funciona sola, sin programas ni
instalaciones. Acá te explico, paso a paso y sin tecnicismos, cómo verla, cómo
subirla a internet y cómo cambiar vos mismo los textos, fotos, el logo y el WhatsApp.

---

## ✅ Ya está todo cargado

- **Logo** → ya incrustado (en el menú y en la portada).
- **WhatsApp** → `351 731-0257` ya conectado al botón de reservas.
- **Instagram** → `@mipiu.espaciosmultiples` ya enlazado.

La web está lista para publicar. Si alguna vez querés cambiar estos datos, mirá los
puntos 3 y 4.

---

## 1. Cómo ver la web en tu compu

Hacé **doble clic** en el archivo **`index.html`**. Se abre en tu navegador
(Chrome, Edge, etc.) y ya la ves completa. No necesitás internet para esto.

---

## 2. Cómo subirla a internet (Hostinger)

1. Entrá a tu panel de **Hostinger** → **Administrador de archivos** (File Manager).
2. Abrí la carpeta **`public_html`**.
3. Seleccioná **TODO lo que hay dentro de esta carpeta** (`index.html`, `styles.css`,
   `main.js`, `.htaccess`, y las carpetas `lib`, `assets`) y arrastralo adentro de
   `public_html`.
4. Esperá a que termine de subir. Listo: entrá a tu dominio y ahí está la web.

> 💡 Las carpetas `tools` y `assets/photos/source` NO hace falta subirlas.

---

## 3. Cambiar textos, WhatsApp, Instagram, espacios y reseñas

Casi todo el contenido vive en **UN solo archivo**: **`lib/manifest.js`**

Abrilo con el **Bloc de notas** (clic derecho → Abrir con → Bloc de notas). Cambiá
**solo el texto entre comillas** `"asi"`. No borres comillas, comas ni llaves `{ }`.
Guardá (Ctrl+S) y recargá la web con **Ctrl+F5**.

### Lo más importante

| Qué | Dónde, en `lib/manifest.js` | Nota |
|---|---|---|
| **Número de WhatsApp** | `whatsapp` | ⚠️ **COMPLETAR.** Solo números, formato internacional: `54` + `9` + `351` + número. Ej: `"5493510000000"`. Mientras esté vacío `""`, el botón abre WhatsApp para elegir contacto pero no escribe a tu número. |
| **Instagram** | `instagram` y `instagramUrl` | Tu usuario real y el enlace completo. |
| Dirección | `address` y `addressShort` | Camino 60 Cuadras km 8.5, Córdoba |
| Valoración y reseñas | `rating`, `reviews` | 4.7 · 591 |
| Texto del teléfono | `phoneDisplay` | 351 731-0257 |

### Cada sección de la página, en `lib/manifest.js`

| Sección de la web | Qué editar |
|---|---|
| **Quiénes somos** | `about:` (título y párrafos) |
| **Servicios** (tarjetas con ícono) | `spaces:` — nombre, tipo, descripción, `icon` |
| **Beneficios** (Bento) | `benefits:` — título, texto, color y `icon` |
| **Cómo funciona** (pasos) | `steps:` |
| **Opiniones** | `testimonials:` |
| **Preguntas frecuentes** | `faqs:` — pregunta (`q`) y respuesta (`a`) |
| **Galería** | `gallery:` — foto y texto alternativo |

> Íconos disponibles (campo `icon`): `tree, droplet, ball, slide, music, utensils,
> sun, sparkles, shield, users, chef, snow, car, leaf, chat, calendar, check, star`.

---

## 4. El logo (ya incrustado)

Tu logo ya está puesto en dos lugares, usando dos versiones (ambas en `assets/img/`):

```
logo-mipiu-wordmark.png   → en el menú de arriba (versión horizontal "Mipiú")
logo-mipiu.png            → en la portada (logo circular completo)
```

**Si querés cambiar el logo más adelante:** reemplazá esos dos archivos por las
versiones nuevas, manteniendo el mismo nombre. Recargá con Ctrl+F5.

> Si por algún motivo el archivo faltara, la web muestra “Mipiú” en morado como
> respaldo, así que nunca se ve rota.

---

## 5. Cambiar las fotos

Las fotos viven en **`assets/img/`**. Las actuales son de muestra (bancos gratuitos)
y están para que las reemplaces por las **fotos reales de Mipiú** (parque, pileta,
canchas, salón, animación).

**La forma más fácil:** poné tus fotos con el **mismo nombre** que las actuales:

```
hero-patio.webp      → foto grande de la portada
gal-6.webp           → Parque Natural
space-patio.webp     → Pileta y Juegos de Agua
space-cancha.webp    → Canchas de Fútbol
space-palestra.webp  → Toboganes y Trepadores
space-animacion.webp → Salón de Baile
space-salon.webp     → Salón Comedor
space-tirolesa.webp  → Galería y Aire Libre
gal-1.webp           → Animación a Domicilio
gal-2 … gal-8.webp   → fotos de la galería
```

> 📷 Lo ideal es que sean `.webp` (pesan menos). Si son `.jpg`, también funcionan:
> subilas con el mismo nombre terminando en `.jpg` y avisame para ajustar el código,
> o pasámelas y te las dejo optimizadas.

La etiqueta roja **“FOTOS REALES DEL ESPACIO…”** de la galería **solo se ve en tu
compu**; desaparece sola cuando la web está publicada.

---

## 6. Cómo funciona el botón de “Reservar por WhatsApp”

Cuando una familia completa el formulario y toca **RESERVAR POR WHATSAPP**, se le
abre **WhatsApp** con todos los datos del evento ya escritos, dirigido a tu número.
Vos recibís el mensaje y **confirmás la disponibilidad a mano**. No hay nada
automático ni pagos online. Para que escriba a tu número, cargá `whatsapp` en
`lib/manifest.js` (punto 3).

---

## 7. Si cambiás algo y no se actualiza

Es la **memoria (caché)** del navegador. Soluciones:

1. Recargá con **Ctrl + F5**.
2. Si subiste cambios a Hostinger y seguís viendo lo viejo: abrí `index.html` con el
   Bloc de notas, buscá `?v=20260626c` (aparece varias veces) y cambiá ese texto por
   la fecha de hoy (ej. `?v=20260815`). Guardá y volvé a subir `index.html`.

---

## 8. Qué hay en cada carpeta

```
index.html        → la página principal
styles.css        → los colores y el diseño
main.js           → las animaciones y el botón de WhatsApp
lib/manifest.js   → ⭐ TUS TEXTOS, WHATSAPP, ESPACIOS Y RESEÑAS (lo que editás)
assets/img/       → las fotos y el logo (logo-mipiu.png)
assets/credits.json → créditos de las fotos de muestra
creditos.html     → página con los créditos de las fotos
.htaccess         → ajustes del servidor (no tocar)
tools/            → carpeta de trabajo (podés ignorarla)
```

Cualquier cosa que quieras cambiar y no sepas cómo, escribime. ¡Que tengas muchos
eventos llenos de chicos felices, rodeados de naturaleza! 🍃
