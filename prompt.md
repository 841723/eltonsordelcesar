Eres un diseñador web senior especializado en diseño visual, UI/UX y desarrollo frontend.

Tu tarea es **diseñar y desarrollar una landing page profesional, moderna y visualmente atractiva para una barbería**.

## Objetivo

Crear una página web que transmita una imagen de barbería moderna, elegante y profesional, con una estética cuidada y orientada a conseguir que el visitante **reserve una cita**.

La página debe sentirse como una web real de un negocio profesional, no como una plantilla genérica.

## Stack tecnológico

Desarrolla exclusivamente con:

- **Astro**
- **TypeScript**
- **Tailwind CSS**

La aplicación debe ser **únicamente frontend**.

No implementes backend, base de datos, autenticación, APIs propias ni sistemas de gestión de citas.

El botón de reserva debe poder enlazar posteriormente con una plataforma externa de reservas. Por ahora puedes utilizar una URL.

## Estructura de la página

La web debe estar compuesta por **una única página**, con todo el contenido integrado en ella.

### 1. Hero / Inicio

Crear una sección principal de gran impacto visual que ocupe inicialmente prácticamente toda la pantalla.

Debe incluir:

- Nombre de la barbería.
- Un eslogan corto y atractivo.
- Una breve descripción de la propuesta de valor.
- Un botón principal **"Reservar cita"**.
- Un botón secundario opcional, por ejemplo **"Ver servicios"**.
- Una imagen de fondo de alta calidad relacionada con una barbería moderna.
- Una capa/overlay sobre la imagen para garantizar que el texto tenga suficiente contraste.
- Una composición visual elegante y profesional.

El contenido debe quedar perfectamente legible tanto en escritorio como en móvil.

### 2. Servicios

Incluir una sección de servicios con tarjetas visualmente atractivas.

Como mínimo:

- Corte de cabello.
- Afeitado clásico.
- Arreglo de barba.
- Corte + barba.

Cada servicio debe incluir:

- Imagen representativa.
- Nombre.
- Descripción breve.
- Precio de ejemplo.
- Opcionalmente, duración aproximada.

Las tarjetas deben tener una interacción visual sutil al pasar el ratón por encima.

### 3. Reserva

Incluir una sección claramente orientada a la conversión para reservar una cita.

Debe contener:

- Un título atractivo.
- Una frase breve invitando a reservar.
- Botón destacado **"Reservar cita"**.
- Espacio preparado para enlazar posteriormente con un sistema externo de reservas.

No desarrollar el sistema de reservas.

### 4. Información de la barbería

Añadir una sección compacta con información básica del negocio:

- Dirección.
- Horario.
- Teléfono.
- Email.
- Enlaces a redes sociales.

La información puede utilizar datos ficticios, pero debe estar estructurada de forma que sea fácil sustituirlos posteriormente.

### 5. Footer

Crear un footer sencillo y elegante que incluya:

- Nombre de la barbería.
- Copyright.
- Enlaces a redes sociales.
- Información de contacto básica.

## Dirección visual

La identidad visual debe estar inspirada en una **barbería clásica combinada con un diseño moderno y premium**.

Utiliza una paleta basada principalmente en:

- Rojo.
- Blanco.
- Azul.
- Negro o tonos muy oscuros como color de apoyo.

Un elemento visual importante de la identidad debe ser el uso de **rayas rojas, blancas y azules**, en este orden y repetidas, inspiradas en el tradicional poste de barbería.

Estas rayas pueden utilizarse de forma elegante en:

- Separadores entre secciones.
- Bordes decorativos.
- Elementos del hero.
- Detalles del footer.
- Otros elementos visuales donde aporten valor.

**No sobrecargues la página con las rayas.** Deben funcionar como un elemento de identidad visual y no dominar el diseño.

## Diseño UI/UX

El diseño debe ser:

- Moderno.
- Premium.
- Limpio.
- Profesional.
- Visualmente atractivo.
- Fácil de navegar.
- Orientado a la conversión.

Evita una apariencia excesivamente genérica de plantilla.

Utiliza:

- Tipografía moderna y apropiada para una barbería.
- Jerarquía visual clara.
- Espaciado generoso.
- Bordes y sombras sutiles.
- Animaciones suaves.
- Microinteracciones en botones y tarjetas.
- Estados hover y focus.
- Transiciones fluidas.

Las animaciones deben ser discretas y no perjudicar la experiencia de usuario.

## Responsive design

La página debe ser completamente responsive.

Debe funcionar correctamente en:

- Móviles.
- Tablets.
- Portátiles.
- Monitores de escritorio grandes.

El diseño debe adaptarse realmente al tamaño de pantalla y no limitarse a reducir proporcionalmente los elementos.

En móvil:

- El menú debe convertirse en un menú hamburguesa si es necesario.
- Los contenidos deben reorganizarse verticalmente.
- Los botones principales deben ser fácilmente pulsables.
- Las imágenes deben adaptarse correctamente.
- No debe existir scroll horizontal.
- La navegación debe ser cómoda con interacción táctil.

## Imágenes

Utiliza imágenes de alta calidad relacionadas con:

- Barberías.
- Cortes de cabello.
- Barbas.
- Afeitado clásico.
- Ambiente de barbería.

Las imágenes deben integrarse de forma coherente con el diseño.

Si utilizas imágenes externas durante el desarrollo, deja claramente identificadas las URLs o fuentes para poder sustituirlas posteriormente.

## Calidad del código

El código debe ser:

- Limpio.
- Modular.
- Mantenible.
- Bien estructurado.
- Tipado correctamente con TypeScript.
- Sin código innecesario.
- Sin dependencias innecesarias.

Divide los componentes de Astro de forma lógica, por ejemplo:

```text
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Services.astro
│   ├── Booking.astro
│   ├── Contact.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro
└── pages/
    └── index.astro
```

Puedes modificar esta estructura si consideras que existe una organización mejor.

## Importante

No desarrolles ninguna funcionalidad de backend.

No desarrolles un sistema real de reservas.

No añadas funcionalidades innecesarias.

No realices trabajo de SEO en esta tarea.

No añadas contenido, configuraciones o componentes relacionados específicamente con posicionamiento SEO.

El objetivo de esta tarea es exclusivamente **crear una frontend web visualmente excelente, responsive y funcional para una barbería utilizando Astro + Tailwind CSS + TypeScript**.

Antes de finalizar, comprueba que:

1. La página se renderiza correctamente.
2. Todos los componentes funcionan.
3. Los enlaces y botones son funcionales.
4. El diseño responsive funciona correctamente.
5. No existe scroll horizontal.
6. La jerarquía visual es clara.
7. El diseño mantiene coherencia entre todas las secciones.
8. La identidad de barbería roja, blanca y azul está presente sin resultar excesiva.
9. La experiencia en móvil es tan cuidada como en escritorio.
10. El resultado final tiene apariencia de una web profesional lista para presentar a un cliente.