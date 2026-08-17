# PromptMaster

> Biblioteca interactiva de prompts parametrizados para crear, personalizar, evaluar y reutilizar instrucciones eficaces para modelos de inteligencia artificial.

PromptMaster transforma una colección de prompts reutilizables en una herramienta práctica para el trabajo diario. Permite localizar plantillas por categoría, completar variables dinámicamente y generar instrucciones listas para copiar y utilizar.

Está pensado para profesionales, estudiantes, creadores de contenido y equipos que quieran utilizar la inteligencia artificial de forma más estructurada, clara y consistente. Funciona completamente en el navegador, sin backend ni instalación de dependencias, y puede publicarse mediante GitHub Pages.

## Demo


## Características principales

- 🔎 Búsqueda por nombre, categoría, modelo, variables o contenido.
- 🗂️ Organización por comunicación, análisis, estudio, creación, datos y sistema.
- 🧩 Personalización dinámica de variables mediante formularios.
- 📋 Copia del prompt original o de la versión personalizada.
- 🧠 Evaluación estructural mediante el marco R-C-T-F-R-E.
- 📥 Exportación de la biblioteca completa en formato CSV.
- 📱 Interfaz responsive para ordenador, tablet y móvil.
- 🚀 Aplicación estática preparada para GitHub Pages.

## Cómo utilizar PromptMaster

### 1. Explora la biblioteca

Cada tarjeta muestra el nombre de la plantilla, categoría, modelo recomendado, versión y ejemplo de uso.

### 2. Busca una plantilla

Utiliza el buscador o las pestañas de categorías para localizar prompts por nombre, temática, modelo, variables o contenido.

### 3. Personaliza un prompt

Selecciona **Usar plantilla**. PromptMaster detectará las variables entre corchetes, como `[NOMBRE_CLIENTE]`, `[TEMA_DEL_PROYECTO]` o `[PÚBLICO_OBJETIVO]`, y generará un formulario para completarlas. La vista previa se actualiza automáticamente.

### 4. Copia el resultado

Puedes copiar el prompt personalizado, listo para utilizar, o la plantilla original con sus variables para reutilizarla posteriormente.

### 5. Evalúa la estructura de un prompt

El evaluador utiliza el marco R-C-T-F-R-E:

| Criterio | Qué analiza |
| --- | --- |
| Rol | Identidad, experiencia y perspectiva del modelo. |
| Contexto | Antecedentes necesarios para resolver la tarea. |
| Tarea | Claridad y precisión de la instrucción. |
| Formato | Estructura esperada de la respuesta. |
| Restricciones | Límites y condiciones. |
| Ejemplos | Referencias de entrada y salida. |

### 6. Exporta la biblioteca

Pulsa **Exportar CSV** para descargar las plantillas y utilizarlas en Excel, Google Sheets u otras herramientas.

## Ejecución local

PromptMaster no requiere backend ni instalación de paquetes. Puedes abrir `index.html` directamente o ejecutar:

```bash
python -m http.server 8000
```

Después visita `http://localhost:8000`. También puedes utilizar la extensión **Live Server** de Visual Studio Code.

## Tecnologías

HTML5 · CSS3 · JavaScript Vanilla · CSV · GitHub Pages · Font Awesome · Google Fonts

## Estructura del proyecto

```text
prompt-master/
├── .github/              # Plantillas de issues y GitHub Actions
├── app.js                # Lógica de la aplicación
├── biblioteca_prompts.csv # Datos exportables
├── CONTRIBUTING.md
├── index.html
├── LICENSE
├── PROMPTS.md            # Documentación de prompts
├── README.md
├── SECURITY.md
└── styles.css
```

## Publicación en GitHub Pages

1. Abre **Settings** en el repositorio.
2. Entra en **Pages**.
3. Selecciona **Deploy from a branch**.
4. Elige la rama `main` y la carpeta `/root`.
5. Pulsa **Save**.


## Contribuir

Las contribuciones son bienvenidas. Para añadir o mejorar un prompt, crea una rama descriptiva, documenta el caso de uso, define las variables y el formato de salida, comprueba la aplicación y abre un Pull Request.

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para más información.

## Seguridad y privacidad

La aplicación no envía datos a un servidor propio. No introduzcas contraseñas, claves API, datos personales, información médica, financiera o confidencial en prompts que vayas a enviar a servicios externos de IA.

Consulta [SECURITY.md](SECURITY.md) para más recomendaciones.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta [LICENSE](LICENSE) para conocer los términos completos.

## Autor

Desarrollado por **TU_NOMBRE** como proyecto de portfolio enfocado en inteligencia artificial aplicada, diseño de prompts y desarrollo web frontend.

- GitHub: [@Punysh6r]
- LinkedIn: [https://www.linkedin.com/in/manuel-mart%C3%ADn-gonz%C3%A1lez-548532273/?locale=es]
- Portfolio: [Punysh3r.com]

Si PromptMaster te resulta útil, considera darle una ⭐ al repositorio.
