# PromptMaster

Biblioteca interactiva de prompts parametrizados para crear, adaptar y evaluar instrucciones para modelos de IA.

## Qué incluye

- 16 prompts organizados en comunicación, análisis, estudio, creación, datos y sistema.
- Búsqueda por nombre, categoría, modelo, variables y contenido.
- Formulario para completar variables y generar una versión lista para copiar.
- Evaluador R-C-T-F-R-E para revisar Rol, Contexto, Tarea, Formato, Restricciones y Ejemplos.
- Exportación de la biblioteca a CSV.
- Documentación completa en Markdown y datos reutilizables en CSV.

## Uso local

No requiere instalación ni backend. Abre `index.html` en un navegador o sirve la carpeta con cualquier servidor estático:

```bash
python -m http.server 8000
```

Después visita `http://localhost:8000`.

## Estructura

```text
├── index.html
├── styles.css
├── app.js
├── biblioteca_prompts.csv
├── ENTREGA_BIBLIOTECA_PROMPTS.md
├── LICENSE
└── .gitignore
```

## Principios de uso

Los prompts son plantillas editables, no garantías de resultados. Revisa siempre las respuestas del modelo, especialmente en ámbitos legales, médicos, financieros o con datos sensibles. No introduzcas información confidencial en servicios de IA sin autorización.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube el contenido de esta carpeta.
3. En **Settings → Pages**, selecciona la rama principal y la carpeta raíz.
4. Guarda los cambios y espera a que GitHub genere la URL pública.

## Licencia

Distribuido bajo licencia MIT. Consulta `LICENSE`.
