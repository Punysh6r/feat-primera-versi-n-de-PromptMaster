# 📚 BIBLIOTECA DE PROMPTS PROFESIONAL
**Asignatura / Curso:** Inteligencia Artificial Aplicada & Prompt Engineering  
**Módulo:** Hands-On S10 · Construcción de Biblioteca de Prompts  
**Criterio de Evaluación:** 16 Entradas completas + Evaluador Permanente R-C-T-F-R-E (Side Quest)  
**Fecha:** 31 de Julio de 2026  

---

## 📌 Resumen de Categorías y Cobertura

| # | Categoría | Nombre de la Entrada | Modelo Recomendado | Versión |
|---|---|---|---|---|
| 01 | 📧 Comunicación | Email de seguimiento tras propuesta B2B | Claude 3.5 Sonnet | v1.2 (2026-07-31) |
| 02 | 📧 Comunicación | Respuesta diplomática a clientes insatisfechos | GPT-4o | v1.0 (2026-07-31) |
| 03 | 📧 Comunicación | Guión de presentación ejecutiva de proyecto | Claude 3.5 Sonnet | v1.1 (2026-07-31) |
| 04 | 📊 Análisis | Matriz DAFO / SWOT cruzada con plan de acción | GPT-4o / Claude 3.5 | v2.0 (2026-07-31) |
| 05 | 📊 Análisis | Resumen ejecutivo estructurado de informe técnico | Claude 3.5 Sonnet | v1.0 (2026-07-31) |
| 06 | 📊 Análisis | Investigación de mercado y benchmark de competidores | Gemini 1.5 Pro | v1.1 (2026-07-31) |
| 07 | 📚 Estudio | Generador de mapas conceptuales y esquemas en Mermaid | GPT-4o | v1.3 (2026-07-31) |
| 08 | 📚 Estudio | Test de autoevaluación interactivo con explicación | Claude 3.5 Sonnet | v1.0 (2026-07-31) |
| 09 | 📚 Estudio | Generador de Flashcards optimizadas para Anki | GPT-4o | v1.2 (2026-07-31) |
| 10 | ✍️ Creación | Copywriting AIDA / PAS para campañas digitales | GPT-4o | v1.4 (2026-07-31) |
| 11 | ✍️ Creación | Generador de Naming y propuesta de identidad de marca | Claude 3.5 Sonnet | v1.0 (2026-07-31) |
| 12 | ✍️ Creación | Guión para vídeo corto (Reels/TikTok/Shorts) con Storytelling | GPT-4o | v1.1 (2026-07-31) |
| 13 | 🔢 Datos | Extractor de datos no estructurados a JSON estricto | GPT-4o / Claude 3.5 | v2.1 (2026-07-31) |
| 14 | 🔢 Datos | Analista de datasets CSV con detección de patrones | Gemini 1.5 Pro | v1.0 (2026-07-31) |
| 15 | ⚙️ Sistema | Meta-Prompt: Generador y optimizador de prompts | Claude 3.5 Sonnet | v2.0 (2026-07-31) |
| 16 | 🏆 **SIDE QUEST** | **Evaluador de Prompts Permanente R-C-T-F-R-E (1-10)** | GPT-4o / Claude 3.5 | v1.0 (2026-07-31) |

---

## 🗂️ Fichas de Entradas de la Biblioteca (6 Campos Obligatorios)

### 01. 📧 Email de seguimiento tras propuesta B2B
- **CATEGORÍA:** Comunicación
- **MODELO:** Claude 3.5 Sonnet
- **PROMPT:**
```text
Actúa como un Director Comercial experto en ventas B2B. Escribe un correo electrónico de seguimiento para el cliente [NOMBRE_CLIENTE] de la empresa [EMPRESA_CLIENTE], a quien enviamos una propuesta sobre [TIPO_PROPUESTA] el día [FECHA_ENVIO]. 

El objetivo es reactivar la conversación sin sonar impositivo, recordando el valor clave expresado en la reunión previa: [BENEFICIO_CLAVE]. 

Mantén un tono profesional, empático y profesional. Incluye una llamada a la acción (CTA) clara para agendar una llamada de 15 minutos en [DISPONIBILIDAD_DÍAS].
```
- **EJEMPLO DE USO:** Utilizado para dar seguimiento a propuestas de software SaaS corporativo enviadas a directores de tecnología tras una semana sin respuesta.
- **VERSIÓN:** v1.2 (2026-07-31)

---

### 02. 📧 Respuesta diplomática a cliente insatisfecho
- **CATEGORÍA:** Comunicación
- **MODELO:** GPT-4o
- **PROMPT:**
```text
Actúa como un Especialista en Atención al Cliente y Resolución de Conflictos. Redacta una respuesta a un cliente llamado [NOMBRE_CLIENTE] que ha expresado su insatisfacción debido a [PROBLEMA_REPORTADO] en relación al producto/servicio [NOMBRE_PRODUCTO].

La respuesta debe seguir la estructura:
1. Empatía sincera y disculpa por el inconveniente sin asumir culpas legales.
2. Explicación breve y transparente de lo sucedido.
3. Solución inmediata propuesta: [SOLUCION_OFERTADA].
4. Compensación o gesto comercial: [COMPENSACION].
5. Cierre profesional reafirmando el compromiso con su satisfacción.

Tono: Respetuoso, asertivo, calmado y enfocado en soluciones.
```
- **EJEMPLO DE USO:** Gestión de una queja recibida por correo tras un retraso de entrega en un servicio de suscripción mensual.
- **VERSIÓN:** v1.0 (2026-07-31)

---

### 03. 📧 Guión de presentación ejecutiva de proyecto
- **CATEGORÍA:** Comunicación
- **MODELO:** Claude 3.5 Sonnet
- **PROMPT:**
```text
Eres un Consultor de Estrategia Ejecutivo. Diseña la estructura de diapositivas y el guión verbal para una presentación de [DURACION_MINUTOS] minutos dirigida a [AUDIENCIA_OBJETIVO] para presentar el proyecto [NOMBRE_PROYECTO].

Para cada diapositiva proporciona:
- Título conciso de la diapositiva
- Idea clave (Takeaway principal)
- Puntos de apoyo visual (bullets)
- Script verbal sugerido para el ponente que resalte [OBJETIVO_PRINCIPAL].

Estilo: Directo, persuasivo y orientado a la toma de decisiones rápidas.
```
- **EJEMPLO DE USO:** Preparación del pitch deck interno para solicitar presupuesto de innovación ante el comité de dirección.
- **VERSIÓN:** v1.1 (2026-07-31)

---

### 04. 📊 Matriz DAFO / SWOT cruzada con plan de acción
- **CATEGORÍA:** Análisis
- **MODELO:** GPT-4o / Claude 3.5 Sonnet
- **PROMPT:**
```text
Actúa como un Analista de Estrategia Empresarial Senior. Realiza un análisis DAFO (Debilidades, Amenazas, Fortalezas, Oportunidades) exhaustivo para el negocio/producto [NOMBRE_NEGOCIO] que opera en el sector de [SECTOR].

Información de contexto disponible:
[CONTEXTO_Y_DATOS]

Formato de salida requerido:
1. Tabla DAFO con al menos 4 puntos en cada cuadrante.
2. Matriz CAME (Corregir debilidades, Afrontar amenazas, Mantener fortalezas, Explotar oportunidades) que vincule los puntos del DAFO.
3. Tres iniciativas estratégicas prioritarias ordenadas por impacto y factibilidad.
```
- **EJEMPLO DE USO:** Evaluación estratégica previa al lanzamiento de una nueva línea de producto en e-commerce.
- **VERSIÓN:** v2.0 (2026-07-31)

---

### 05. 📊 Resumen ejecutivo estructurado de informe técnico
- **CATEGORÍA:** Análisis
- **MODELO:** Claude 3.5 Sonnet
- **PROMPT:**
```text
Eres un Editor Ejecutivo especializado en síntesis de información de alto nivel. Lee el siguiente texto/informe técnico sobre [TEMA_INFORME] y genera un Resumen Ejecutivo estructurado para la alta dirección.

Texto fuente:
"""
[TEXTO_DEL_INFORME]
"""

Estructura de la respuesta:
1. Resumen en un párrafo de 3 líneas (Elevator pitch).
2. 5 Conclusiones clave (Key Findings) presentadas en viñetas destacadas.
3. Riegos identificados y grado de severidad (Alto/Medio/Bajo).
4. Recomendación de acción inmediata recomendada.
```
- **EJEMPLO DE USO:** Condensación de un informe de auditoría de ciberseguridad de 40 páginas para presentarlo al CEO.
- **VERSIÓN:** v1.0 (2026-07-31)

---

### 06. 📊 Investigación de mercado y benchmark de competidores
- **CATEGORÍA:** Análisis
- **MODELO:** Gemini 1.5 Pro
- **PROMPT:**
```text
Actúa como un Investigador de Mercado Senior. Realiza un análisis comparativo y benchmark entre nuestra solución [NUESTRA_SOLUCION] y los principales competidores: [LISTA_COMPETIDORES].

Analiza los siguientes ejes:
1. Propuesta de valor principal.
2. Modelo de precios y monetización.
3. Público objetivo secundario.
4. Ventaja competitiva (Moat) identificada.
5. Puntos débiles criticados por sus usuarios.

Concluye con un apartado de "Oportunidades de Diferenciación" no explotadas actualmente en el mercado.
```
- **EJEMPLO DE USO:** Estudio de competencia para una app móvil de gestión de finanzas personales.
- **VERSIÓN:** v1.1 (2026-07-31)

---

### 07. 📚 Generador de mapas conceptuales y esquemas en Mermaid
- **CATEGORÍA:** Estudio
- **MODELO:** GPT-4o
- **PROMPT:**
```text
Actúa como un Pedagogo y Diseñador Instruccional. Toma el siguiente tema de estudio: [TEMA_DE_ESTUDIO] y genera un esquema conceptual claro que facilite el aprendizaje significativo.

Requisitos de salida:
1. Un resumen jerárquico por niveles con viñetas indicando conceptos clave y conectores.
2. Código válido en sintaxis `mermaid` (graph TD) listo para renderizar visualmente el mapa conceptual.
3. Explicación de la relación lógica entre los 3 nodos más importantes.

Nivel de profundidad deseado: [NIVEL_DETALLE: Introductorio / Intermedio / Avanzado].
```
- **EJEMPLO DE USO:** Estudio de la arquitectura de sistemas distribuidos para exámenes de ingeniería de software.
- **VERSIÓN:** v1.3 (2026-07-31)

---

### 08. 📚 Test de autoevaluación interactivo con explicación
- **CATEGORÍA:** Estudio
- **MODELO:** Claude 3.5 Sonnet
- **PROMPT:**
```text
Eres un Tutor Académico Personalizado. Genera un test de autoevaluación de [NUMERO_PREGUNTAS] preguntas de opción múltiple (A, B, C, D) sobre el material: [MATERIA_O_TEXTO].

Para cada pregunta:
- Formula una pregunta clara que evalúe la comprensión conceptual, no solo la memorización.
- Proporciona 4 opciones donde solo 1 sea correcta y los distractores sean plausibles.
- Incluye al final del test la clave de respuestas correctas acompañada de una explicación pedagógica detallada de por qué la opción es correcta y por qué fallan las demás.
```
- **EJEMPLO DE USO:** Repaso interactivo antes de un examen parcial de Derecho Mercantil.
- **VERSIÓN:** v1.0 (2026-07-31)

---

### 09. 📚 Generador de Flashcards optimizadas para Anki
- **CATEGORÍA:** Estudio
- **MODELO:** GPT-4o
- **PROMPT:**
```text
Actúa como un Experto en Técnicas de Estudio y Repetición Espaciada. Genera una lista de [CANTIDAD] flashcards para memorizar conceptos clave sobre [MATERIA].

Formato estricto para importar a Anki (separado por tabulaciones o formato CSV `Anverso;Reverso`):
- Anverso: Pregunta atómica, directa y sin ambigüedades.
- Reverso: Respuesta concisa (máximo 2 frases) con la palabra clave resaltada en negrita.

Reglas: Aplica el principio de atomicidad (una sola idea por tarjeta) para maximizar la retención a largo plazo.
```
- **EJEMPLO DE USO:** Creación masiva de tarjetas para aprender vocabulario técnico de certificación Cloud AWS.
- **VERSIÓN:** v1.2 (2026-07-31)

---

### 10. ✍️ Copywriting AIDA / PAS para campañas digitales
- **CATEGORÍA:** Creación
- **MODELO:** GPT-4o
- **PROMPT:**
```text
Actúa como un Copywriter Publicitario de alto nivel. Crea 3 variaciones de textos publicitarios para la campaña de [PRODUCTO_O_SERVICIO] enfocada a [PÚBLICO_OBJETIVO].

Variación 1 (Fórmula AIDA): Atención, Interés, Deseo, Acción.
Variación 2 (Fórmula PAS): Problema, Agitación, Solución.
Variación 3 (Fórmula BAB): Before, After, Bridge (Antes, Después, Puente).

Cada variación debe incluir:
- Titular gancho (Hook) para detener el scroll.
- Cuerpo del mensaje adaptado al canal [CANAL: Instagram / LinkedIn / Google Ads].
- Llamada a la acción (CTA) clara y persuasiva.
```
- **EJEMPLO DE USO:** Creación del copy para anuncios en LinkedIn Ads promoviendo un programa de formación ejecutiva.
- **VERSIÓN:** v1.4 (2026-07-31)

---

### 11. ✍️ Generador de Naming y propuesta de identidad de marca
- **CATEGORÍA:** Creación
- **MODELO:** Claude 3.5 Sonnet
- **PROMPT:**
```text
Eres un Especialista en Branding y Naming. Genera 10 propuestas de nombres comerciales para una nueva marca que ofrece [DESCRIPCION_PRODUCTO] y cuyos valores principales son [VALORES_MARCA].

Organiza las 10 propuestas en 4 categorías creativas:
1. Nombres Descriptivos o Sugestivos.
2. Nombres Neologismos / Inventados.
3. Nombres Basados en Metáforas o Naturaleza.
4. Nombres Abstractos / Evocativos.

Para cada propuesta incluye: Nombre, Significado/Historia detrás del nombre, Disponibilidad conceptual de dominio (.com/.es) y Tono de voz sugerido.
```
- **EJEMPLO DE USO:** Creación del nombre comercial para una marca de cosmética natural ecológica.
- **VERSIÓN:** v1.0 (2026-07-31)

---

### 12. ✍️ Guión para vídeo corto (Reels/TikTok/Shorts) con Storytelling
- **CATEGORÍA:** Creación
- **MODELO:** GPT-4o
- **PROMPT:**
```text
Actúa como un Creador de Contenido Viral y Guionista de Vídeo. Redacta un guión estructurado de [DURACION_SEGUNDOS] segundos para redes sociales verticales sobre [TEMA_DEL_VIDEO].

Estructura requerida en formato tabla de 3 columnas:
- Columna 1: Tiempo (Segundos 0-3, 3-10, 10-30, etc.).
- Columna 2: Visual & Texto en pantalla (Indicaciones de cámara, B-roll, overlays).
- Columna 3: Audio & Voz en off (Script exacto a pronunciar).

Asegúrate de colocar un Hook disruptivo en los primeros 3 segundos y finalizar con un llamado al engagement: [ACCION_DESEADA].
```
- **EJEMPLO DE USO:** Producción de un Reel explicativo de 45 segundos sobre consejos de productividad laboral.
- **VERSIÓN:** v1.1 (2026-07-31)

---

### 13. 🔢 Extractor de datos no estructurados a JSON estricto
- **CATEGORÍA:** Datos
- **MODELO:** GPT-4o / Claude 3.5 Sonnet
- **PROMPT:**
```text
Actúa como una API de Procesamiento de Datos y Extracción ETL. Analiza el siguiente texto no estructurado y extrae la información cumpliendo estrictamente el esquema JSON proporcionado.

Texto fuente:
"""
[TEXTO_FUENTES_DATOS]
"""

Esquema JSON requerido:
{
  "entidades": [
    {
      "nombre": "string",
      "categoria": "string",
      "metricas": {
        "valor": "number",
        "unidad": "string"
      },
      "observaciones": "string"
    }
  ],
  "fecha_procesamiento": "YYYY-MM-DD"
}

Reglas: Devuelve ÚNICAMENTE el objeto JSON sin bloques de markdown adicionales ni texto introductorio. Valida los tipos de datos.
```
- **EJEMPLO DE USO:** Automatización de extracción de datos de facturas y notas de prensa impresas para ingestión en base de datos.
- **VERSIÓN:** v2.1 (2026-07-31)

---

### 14. 🔢 Analista de datasets CSV con detección de patrones
- **CATEGORÍA:** Datos
- **MODELO:** Gemini 1.5 Pro
- **PROMPT:**
```text
Actúa como un Científico de Datos Senior. A continuación te proporciono un conjunto de datos en formato CSV correspondiente a [DESCRIPCION_DATASET].

Datos CSV:
"""
[DATOS_CSV]
"""

Realiza las siguientes tareas de análisis:
1. Resumen estadístico descriptivo de las variables clave.
2. Identificación de anomalías, valores nulos o sesgos en los datos.
3. Tres correlaciones o hallazgos no evidentes (insights) más significativos.
4. Dos hipótesis explicativas sobre las tendencias observadas.
5. Recomendación de próximos pasos para un modelado predictivo.
```
- **EJEMPLO DE USO:** Análisis rápido de exportación de registros de ventas trimestrales para detectar fuga de clientes (churn).
- **VERSIÓN:** v1.0 (2026-07-31)

---

### 15. ⚙️ Meta-Prompt: Generador y optimizador de prompts
- **CATEGORÍA:** Sistema
- **MODELO:** Claude 3.5 Sonnet
- **PROMPT:**
```text
Eres un Ingeniero de Prompts Experto de clase mundial (Meta-Prompt Architect). Tu tarea es construir un prompt perfecto de alto rendimiento a partir de la idea inicial del usuario.

Idea inicial o tarea del usuario: [TAREA_DESEADA]

Aplica las mejores prácticas de Prompt Engineering:
- Asignación de un Rol claro y experto.
- Definición de Contexto relevante y delimitación de alcance.
- Instrucciones paso a paso (Chain of Thought).
- Parametrización con [VARIABLES] claras entre corchetes.
- Formato de salida estructurado (JSON, Markdown, Tablas).
- Restricciones explícitas (Qué NO debe hacer el modelo).

Presenta el prompt optimizado dentro de un bloque de código fácil de copiar, seguido de un breve resumen explicativo de por qué las mejoras aumentarán la precisión.
```
- **EJEMPLO DE USO:** Optimización de instrucciones ambiguas para crear un asistente especializado en soporte técnico interno.
- **VERSIÓN:** v2.0 (2026-07-31)

---

### 16. 🏆 Evaluador de Prompts Permanente R-C-T-F-R-E (SIDE QUEST)
- **CATEGORÍA:** Sistema
- **MODELO:** GPT-4o / Claude 3.5 Sonnet
- **PROMPT:**
```text
Actúa como un Auditor Académico e Ingeniero de Prompts Certificado. Tu función permanente es evaluar cualquier prompt proporcionado por el usuario utilizando el marco de criterios R-C-T-F-R-E y otorgar una calificación objetiva del 1 al 10.

El prompt que debes evaluar es el siguiente:
"""
[PROMPT_A_EVALUAR]
"""

Evalúa de forma analítica los 6 criterios fundamentales:

1. 🎭 ROL (0 a 1.5 pts): ¿Define una identidad, nivel de experiencia y perspectiva adecuada?
2. 🌐 CONTEXTO (0 a 2.0 pts): ¿Aporta los antecedentes, entorno y estado necesario para la tarea?
3. 🎯 TAREA (0 a 2.5 pts): ¿Indica la instrucción de forma clara, directa y sin ambigüedades?
4. 📐 FORMATO (0 a 1.5 pts): ¿Especifica el formato exacto de salida (listas, JSON, tablas, tono, longitud)?
5. 🚫 RESTRICCIONES (0 a 1.5 pts): ¿Establece límites claros sobre lo que NO se debe incluir o asunciones prohibidas?
6. 💡 EJEMPLO / FEW-SHOT (0 a 1.0 pts): ¿Ofrece demostraciones o casos de referencia de entrada/salida?

Formato obligatorio de tu informe de evaluación:
- TABLA DESGLOSADA: Criterio | Puntuación obtenida | Justificación breve.
- NOTA FINAL: X.X / 10.
- VERDICTO: [EXCELENTE (9-10) / BUENO (7-8.9) / MEJORABLE (5-6.9) / INSUFICIENTE (<5)].
- 3 RECOMENDACIONES DE MEJORA: Sugerencias concretas para elevar la puntuación a 10/10.
- PROMPT REESCRITO OPTIMIZADO: La versión corregida lista para usarse.
```
- **EJEMPLO DE USO:** Auditoría y control de calidad continuo de la biblioteca de prompts del equipo antes de su publicación compartida.
- **VERSIÓN:** v1.0 (2026-07-31)
