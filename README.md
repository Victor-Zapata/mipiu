# Wonka Eventos Infantiles — tu página web

Hola 👋 Esta carpeta es tu página web completa. Funciona sola, sin programas ni
instalaciones. Acá te explico, paso a paso y sin tecnicismos, cómo verla, cómo
subirla a internet y cómo cambiar vos mismo los textos, fotos y teléfonos.

---

## 1. Cómo ver la web en tu compu

Hacé **doble clic** en el archivo **`index.html`**. Se abre en tu navegador
(Chrome, Edge, etc.) y ya la ves completa. No necesitás internet para esto.

---

## 2. Cómo subirla a internet (Hostinger)

1. Entrá a tu panel de **Hostinger** → **Administrador de archivos** (File Manager).
2. Abrí la carpeta **`public_html`**.
3. Seleccioná **TODO lo que hay dentro de esta carpeta** (los archivos `index.html`,
   `styles.css`, `main.js`, `.htaccess`, y las carpetas `lib`, `assets`) y arrastralos
   adentro de `public_html`.
4. Esperá a que termine de subir. Listo: entrá a tu dominio y ahí está la web.

> 💡 La carpeta `tools` y la carpeta `assets/photos/source` NO hace falta subirlas
> (son de trabajo). Si las subís igual, no pasa nada.

---

## 3. Cambiar textos, teléfonos, espacios y reseñas

Casi todo el contenido vive en **UN solo archivo**:

```
lib/manifest.js
```

Abrilo con el **Bloc de notas** (clic derecho → Abrir con → Bloc de notas).
Vas a ver líneas como esta:

```js
tagline: "El cumple más grande que imaginaste.",
phoneDisplay: "351 202 5705",
whatsapp: "5493512025705",
```

Cambiá **solo el texto que está entre comillas** `"asi"`. No borres las comillas,
ni las comas, ni las llaves `{ }`. Guardá (Ctrl+S) y recargá la web con **Ctrl+F5**.

### Lo más importante a revisar antes de publicar

| Qué | Dónde, en `lib/manifest.js` | Nota |
|---|---|---|
| Teléfono que se muestra | `phoneDisplay` | Ej: `"351 202 5705"` |
| Número de WhatsApp (para el botón) | `whatsapp` | Solo números, formato internacional: `54` + `9` + `351` + número. Ej: `"5493512025705"` |
| Segundo teléfono | `phone2Display` | Dejalo `""` vacío si no querés mostrarlo |
| **Instagram** | `instagram` y `instagramUrl` | ⚠️ **Verificá que el usuario sea el correcto.** Lo dejé como `@wonka.eventosinfantiles` de ejemplo. |
| Dirección | `address` y `addressShort` | |
| Valoración y reseñas | `rating`, `reviews` | |

### Cambiar los 8 espacios/juegos

En el mismo archivo, buscá `spaces:`. Cada espacio tiene su nombre, tipo, descripción
y color. Cambiá el texto entre comillas. Los colores válidos son:
`"violeta"`, `"dorado"`, `"turquesa"` o `"coral"`.

### Cambiar las reseñas de las familias

Buscá `testimonials:`. Cada reseña tiene `quote` (el texto) y `author` (el nombre).

### Cambiar los números grandes

Buscá `stats:`. Son los 4 números de la sección "Los Números".

---

## 4. Cambiar las fotos

Las fotos viven en la carpeta **`assets/img/`**. Las que ves ahora son de muestra
(de bancos de imágenes gratuitos) y están pensadas para que las reemplaces por las
**fotos reales de Wonka**.

**La forma más fácil:** poné tus fotos con el **mismo nombre** que las actuales.
Por ejemplo, si tu foto del patio se llama distinto, renombrala a `space-patio.webp`
y reemplazá la que está. Estos son los nombres que usa la web:

```
hero-patio.webp      → foto grande del inicio (patio/juegos)
space-patio.webp     → Patio al Aire Libre
space-tirolesa.webp  → Tirolesa
space-palestra.webp  → Palestra
space-castillo.webp  → Castillo Inflable
space-cancha.webp    → Mini Cancha
space-salon.webp     → Salón Interior
space-mesa.webp      → Mesa Dulce y Torta
space-animacion.webp → Animación y Coordinación
gal-1.webp … gal-8.webp → fotos de la galería
```

> 📷 Lo ideal es que las fotos sean `.webp` (pesan menos). Si tus fotos son `.jpg`,
> también funcionan: subilas con el mismo nombre pero terminando en `.jpg` y avisame
> para ajustar el nombre en el archivo `lib/manifest.js`. Si preferís, pasámelas y te
> las dejo optimizadas.

La etiqueta roja **"FOTOS REALES DEL ESPACIO…"** que ves en la galería **solo aparece
cuando abrís la web en tu compu** — desaparece sola cuando la web está publicada en
internet. No tenés que hacer nada.

---

## 5. Cómo funciona el botón de "Reservar fecha"

Cuando una familia completa el formulario y toca **RESERVAR FECHA**, se le abre
**WhatsApp** con todos los datos ya escritos, dirigido a tu número. Vos recibís el
mensaje y **confirmás la disponibilidad a mano**, como siempre. No hay nada
automático ni ningún sistema de pagos: es simplemente una forma cómoda de que te
escriban con toda la info del cumple lista.

Para que ese botón funcione, el número en `whatsapp:` (dentro de `lib/manifest.js`)
tiene que ser el correcto, en formato internacional y solo con números.

---

## 6. Si cambiás algo y no se actualiza

Es la **memoria (caché)** del navegador, que guarda la versión vieja. Soluciones:

1. Recargá con **Ctrl + F5** (fuerza traer la versión nueva).
2. Si subiste cambios a Hostinger y seguís viendo lo viejo: abrí `index.html` con el
   Bloc de notas, buscá donde dice `?v=20260619` (aparece varias veces) y cambiá ese
   número por la fecha de hoy, por ejemplo `?v=20260815`. Guardá y volvé a subir el
   `index.html`. Eso obliga al navegador a traer todo nuevo.

---

## 7. Qué hay en cada carpeta (por las dudas)

```
index.html        → la página principal
styles.css        → los colores y el diseño
main.js           → las animaciones y el botón de WhatsApp
lib/manifest.js   → ⭐ TUS TEXTOS, TELÉFONOS Y DATOS (lo que editás)
lib/              → librerías de animación (no tocar)
assets/img/       → las fotos
assets/credits.json → créditos de las fotos de muestra
creditos.html     → página con los créditos de las fotos
.htaccess         → ajustes del servidor (no tocar)
tools/            → carpeta de trabajo (podés ignorarla)
```

Cualquier cosa que quieras cambiar y no sepas cómo, escribime. ¡Que tengas muchos
cumples llenos de chicos felices! 🎉
