const PROMPTS_DATA = [
    {
        id: 1,
        nombre: "Email de seguimiento tras propuesta B2B",
        categoria: "Comunicación",
        modelo: "Claude 3.5 Sonnet",
        prompt: `Actúa como un Director Comercial experto en ventas B2B. Escribe un correo electrónico de seguimiento para el cliente [NOMBRE_CLIENTE] de la empresa [EMPRESA_CLIENTE], a quien enviamos una propuesta sobre [TIPO_PROPUESTA] el día [FECHA_ENVIO]. 

El objetivo es reactivar la conversación sin sonar impositivo, recordando el valor clave expresado en la reunión previa: [BENEFICIO_CLAVE]. 

Mantén un tono profesional, empático y profesional. Incluye una llamada a la acción (CTA) clara para agendar una llamada de 15 minutos en [DISPONIBILIDAD_DÍAS].`,
        ejemplo: "Seguimiento a propuestas SaaS enviadas a directores IT tras una semana sin respuesta.",
        version: "v1.2 (2026-07-31)"
    },
    {
        id: 2,
        nombre: "Respuesta diplomática a clientes insatisfechos",
        categoria: "Comunicación",
        modelo: "GPT-4o",
        prompt: `Actúa como un Especialista en Atención al Cliente y Resolución de Conflictos. Redacta una respuesta a un cliente llamado [NOMBRE_CLIENTE] que ha expresado su insatisfacción debido a [PROBLEMA_REPORTADO] en relación al producto/servicio [NOMBRE_PRODUCTO].

La respuesta debe seguir la estructura:
1. Empatía sincera y disculpa por el inconveniente sin asumir culpas legales.
2. Explicación breve y transparente de lo sucedido.
3. Solución inmediata propuesta: [SOLUCION_OFERTADA].
4. Compensación o gesto comercial: [COMPENSACION].
5. Cierre profesional reafirmando el compromiso con su satisfacción.`,
        ejemplo: "Gestión de quejas tras retrasos de entrega en servicios de suscripción mensual.",
        version: "v1.0 (2026-07-31)"
    },
    {
        id: 3,
        nombre: "Guión de presentación ejecutiva de proyecto",
        categoria: "Comunicación",
        modelo: "Claude 3.5 Sonnet",
        prompt: `Eres un Consultor de Estrategia Ejecutivo. Diseña la estructura de diapositivas y el guión verbal para una presentación de [DURACION_MINUTOS] minutos dirigida a [AUDIENCIA_OBJETIVO] para presentar el proyecto [NOMBRE_PROYECTO].

Para cada diapositiva proporciona:
- Título conciso de la diapositiva
- Idea clave (Takeaway principal)
- Puntos de apoyo visual (bullets)
- Script verbal sugerido para el ponente que resalte [OBJETIVO_PRINCIPAL].`,
        ejemplo: "Pitch deck interno para solicitar presupuesto de innovación ante el comité.",
        version: "v1.1 (2026-07-31)"
    },
    {
        id: 4,
        nombre: "Matriz DAFO / SWOT cruzada con plan de acción",
        categoria: "Análisis",
        modelo: "GPT-4o / Claude 3.5",
        prompt: `Actúa como un Analista de Estrategia Empresarial Senior. Realiza un análisis DAFO (Debilidades, Amenazas, Fortalezas, Oportunidades) exhaustivo para el negocio/producto [NOMBRE_NEGOCIO] que opera en el sector de [SECTOR].

Información de contexto disponible:
[CONTEXTO_Y_DATOS]

Formato de salida requerido:
1. Tabla DAFO con al menos 4 puntos en cada cuadrante.
2. Matriz CAME (Corregir debilidades, Afrontar amenazas, Mantener fortalezas, Explotar oportunidades) que vincule los puntos del DAFO.
3. Tres iniciativas estratégicas prioritarias ordenadas por impacto y factibilidad.`,
        ejemplo: "Evaluación estratégica previa al lanzamiento de una nueva línea e-commerce.",
        version: "v2.0 (2026-07-31)"
    },
    {
        id: 5,
        nombre: "Resumen ejecutivo estructurado de informe técnico",
        categoria: "Análisis",
        modelo: "Claude 3.5 Sonnet",
        prompt: `Eres un Editor Ejecutivo especializado en síntesis de información de alto nivel. Lee el siguiente texto/informe técnico sobre [TEMA_INFORME] y genera un Resumen Ejecutivo estructurado para la alta dirección.

Texto fuente:
"""
[TEXTO_DEL_INFORME]
"""

Estructura de la respuesta:
1. Resumen en un párrafo de 3 líneas (Elevator pitch).
2. 5 Conclusiones clave (Key Findings) presentadas en viñetas destacadas.
3. Riesgos identificados y grado de severidad (Alto/Medio/Bajo).
4. Recomendación de acción inmediata recomendada.`,
        ejemplo: "Condensación de un informe de auditoría de ciberseguridad de 40 páginas para el CEO.",
        version: "v1.0 (2026-07-31)"
    },
    {
        id: 6,
        nombre: "Investigación de mercado y benchmark de competidores",
        categoria: "Análisis",
        modelo: "Gemini 1.5 Pro",
        prompt: `Actúa como un Investigador de Mercado Senior. Realiza un análisis comparativo y benchmark entre nuestra solución [NUESTRA_SOLUCION] y los principales competidores: [LISTA_COMPETIDORES].

Analiza los siguientes ejes:
1. Propuesta de valor principal.
2. Modelo de precios y monetización.
3. Público objetivo secundario.
4. Ventaja competitiva (Moat) identificada.
5. Puntos débiles criticados por sus usuarios.

Concluye con un apartado de "Oportunidades de Diferenciación" no explotadas actualmente en el mercado.`,
        ejemplo: "Estudio de competencia para app móvil de gestión de finanzas personales.",
        version: "v1.1 (2026-07-31)"
    },
    {
        id: 7,
        nombre: "Generador de mapas conceptuales y esquemas en Mermaid",
        categoria: "Estudio",
        modelo: "GPT-4o",
        prompt: `Actúa como un Pedagogo y Diseñador Instruccional. Toma el siguiente tema de estudio: [TEMA_DE_ESTUDIO] y genera un esquema conceptual claro que facilite el aprendizaje significativo.

Requisitos de salida:
1. Un resumen jerárquico por niveles con viñetas indicando conceptos clave y conectores.
2. Código válido en sintaxis \`mermaid\` (graph TD) listo para renderizar visualmente el mapa conceptual.
3. Explicación de la relación lógica entre los 3 nodos más importantes.

Nivel de profundidad deseado: [NIVEL_DETALLE: Introductorio / Intermedio / Avanzado].`,
        ejemplo: "Estudio de la arquitectura de sistemas distribuidos para exámenes de ingeniería.",
        version: "v1.3 (2026-07-31)"
    },
    {
        id: 8,
        nombre: "Test de autoevaluación interactivo con explicación",
        categoria: "Estudio",
        modelo: "Claude 3.5 Sonnet",
        prompt: `Eres un Tutor Académico Personalizado. Genera un test de autoevaluación de [NUMERO_PREGUNTAS] preguntas de opción múltiple (A, B, C, D) sobre el material: [MATERIA_O_TEXTO].

Para cada pregunta:
- Formula una pregunta clara que evalúe la comprensión conceptual, no solo la memorización.
- Proporciona 4 opciones donde solo 1 sea correcta y los distractores sean plausibles.
- Incluye al final del test la clave de respuestas correctas acompañada de una explicación pedagógica detallada de por qué la opción es correcta y por qué fallan las demás.`,
        ejemplo: "Repaso interactivo antes de un examen parcial de Derecho Mercantil.",
        version: "v1.0 (2026-07-31)"
    },
    {
        id: 9,
        nombre: "Generador de Flashcards optimizadas para Anki",
        categoria: "Estudio",
        modelo: "GPT-4o",
        prompt: `Actúa como un Experto en Técnicas de Estudio y Repetición Espaciada. Genera una lista de [CANTIDAD] flashcards para memorizar conceptos clave sobre [MATERIA].

Formato estricto para importar a Anki (separado por tabulaciones o formato CSV \`Anverso;Reverso\`):
- Anverso: Pregunta atómica, directa y sin ambigüedades.
- Reverso: Respuesta concisa (máximo 2 frases) con la palabra clave resaltada en negrita.

Reglas: Aplica el principio de atomicidad (una sola idea por tarjeta) para maximizar la retención a largo plazo.`,
        ejemplo: "Creación masiva de tarjetas para aprender vocabulario técnico de certificación AWS.",
        version: "v1.2 (2026-07-31)"
    },
    {
        id: 10,
        nombre: "Copywriting AIDA / PAS para campañas digitales",
        categoria: "Creación",
        modelo: "GPT-4o",
        prompt: `Actúa como un Copywriter Publicitario de alto nivel. Crea 3 variaciones de textos publicitarios para la campaña de [PRODUCTO_O_SERVICIO] enfocada a [PÚBLICO_OBJETIVO].

Variación 1 (Fórmula AIDA): Atención, Interés, Deseo, Acción.
Variación 2 (Fórmula PAS): Problema, Agitación, Solución.
Variación 3 (Fórmula BAB): Before, After, Bridge (Antes, Después, Puente).

Cada variación debe incluir:
- Titular gancho (Hook) para detener el scroll.
- Cuerpo del mensaje adaptado al canal [CANAL: Instagram / LinkedIn / Google Ads].
- Llamada a la acción (CTA) clara y persuasiva.`,
        ejemplo: "Copy para anuncios en LinkedIn Ads promoviendo formación ejecutiva.",
        version: "v1.4 (2026-07-31)"
    },
    {
        id: 11,
        nombre: "Generador de Naming y propuesta de identidad de marca",
        categoria: "Creación",
        modelo: "Claude 3.5 Sonnet",
        prompt: `Eres un Especialista en Branding y Naming. Genera 10 propuestas de nombres comerciales para una nueva marca que ofrece [DESCRIPCION_PRODUCTO] y cuyos valores principales son [VALORES_MARCA].

Organiza las 10 propuestas en 4 categorías creativas:
1. Nombres Descriptivos o Sugestivos.
2. Nombres Neologismos / Inventados.
3. Nombres Basados en Metáforas o Naturaleza.
4. Nombres Abstractos / Evocativos.

Para cada propuesta incluye: Nombre, Significado/Historia detrás del nombre, Disponibilidad conceptual de dominio (.com/.es) y Tono de voz sugerido.`,
        ejemplo: "Creación del nombre comercial para marca de cosmética natural ecológica.",
        version: "v1.0 (2026-07-31)"
    },
    {
        id: 12,
        nombre: "Guión para vídeo corto (Reels/TikTok/Shorts) con Storytelling",
        categoria: "Creación",
        modelo: "GPT-4o",
        prompt: `Actúa como un Creador de Contenido Viral y Guionista de Vídeo. Redacta un guión estructurado de [DURACION_SEGUNDOS] segundos para redes sociales verticales sobre [TEMA_DEL_VIDEO].

Estructura requerida en formato tabla de 3 columnas:
- Columna 1: Tiempo (Segundos 0-3, 3-10, 10-30, etc.).
- Columna 2: Visual & Texto en pantalla (Indicaciones de cámara, B-roll, overlays).
- Columna 3: Audio & Voz en off (Script exacto a pronunciar).

Asegúrate de colocar un Hook disruptivo en los primeros 3 segundos y finalizar con un llamado al engagement: [ACCION_DESEADA].`,
        ejemplo: "Producción de un Reel explicativo de 45 segundos sobre consejos de productividad.",
        version: "v1.1 (2026-07-31)"
    },
    {
        id: 13,
        nombre: "Extractor de datos no estructurados a JSON estricto",
        categoria: "Datos",
        modelo: "GPT-4o / Claude 3.5",
        prompt: `Actúa como una API de Procesamiento de Datos y Extracción ETL. Analiza el siguiente texto no estructurado y extrae la información cumpliendo estrictamente el esquema JSON proporcionado.

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

Reglas: Devuelve ÚNICAMENTE el objeto JSON sin bloques de markdown adicionales ni texto introductorio. Valida los tipos de datos.`,
        ejemplo: "Extracción automatizada de facturas e informes impresos para base de datos.",
        version: "v2.1 (2026-07-31)"
    },
    {
        id: 14,
        nombre: "Analista de datasets CSV con detección de patrones",
        categoria: "Datos",
        modelo: "Gemini 1.5 Pro",
        prompt: `Actúa como un Científico de Datos Senior. A continuación te proporciono un conjunto de datos en formato CSV correspondiente a [DESCRIPCION_DATASET].

Datos CSV:
"""
[DATOS_CSV]
"""

Realiza las siguientes tareas de análisis:
1. Resumen estadístico descriptivo de las variables clave.
2. Identificación de anomalías, valores nulos o sesgos en los datos.
3. Tres correlaciones o hallazgos no evidentes (insights) más significativos.
4. Dos hipótesis explicativas sobre las tendencias observadas.
5. Recomendación de próximos pasos para un modelado predictivo.`,
        ejemplo: "Análisis de registros de ventas trimestrales para detectar churn de clientes.",
        version: "v1.0 (2026-07-31)"
    },
    {
        id: 15,
        nombre: "Meta-Prompt: Generador y optimizador de prompts",
        categoria: "Sistema",
        modelo: "Claude 3.5 Sonnet",
        prompt: `Eres un Ingeniero de Prompts Experto de clase mundial (Meta-Prompt Architect). Tu tarea es construir un prompt perfecto de alto rendimiento a partir de la idea inicial del usuario.

Idea inicial o tarea del usuario: [TAREA_DESEADA]

Aplica las mejores prácticas de Prompt Engineering:
- Asignación de un Rol claro y experto.
- Definición de Contexto relevante y delimitación de alcance.
- Instrucciones paso a paso (Chain of Thought).
- Parametrización con [VARIABLES] claras entre corchetes.
- Formato de salida estructurado (JSON, Markdown, Tablas).
- Restricciones explícitas (Qué NO debe hacer el modelo).

Presenta el prompt optimizado dentro de un bloque de código fácil de copiar, seguido de un breve resumen explicativo.`,
        ejemplo: "Optimización de instrucciones ambiguas para crear un asistente virtual de soporte.",
        version: "v2.0 (2026-07-31)"
    },
    {
        id: 16,
        nombre: "Evaluador de Prompts Permanente R-C-T-F-R-E (SIDE QUEST)",
        categoria: "Sistema",
        modelo: "GPT-4o / Claude 3.5",
        prompt: `Actúa como un Auditor Académico e Ingeniero de Prompts Certificado. Tu función permanente es evaluar cualquier prompt proporcionado por el usuario utilizando el marco de criterios R-C-T-F-R-E y otorgar una calificación objetiva del 1 al 10.

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
- PROMPT REESCRITO OPTIMIZADO: La versión corregida lista para usarse.`,
        ejemplo: "Auditoría y control de calidad permanente de la biblioteca de prompts del curso.",
        version: "v1.0 (2026-07-31)",
        isSideQuest: true
    }
];

let activeCategory = "ALL";
let currentPromptItem = null;

// DOM Elements
const promptsGrid = document.getElementById("promptsGrid");
const searchInput = document.getElementById("searchInput");
const categoryTabs = document.getElementById("categoryTabs");
const variableModal = document.getElementById("variableModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const variablesForm = document.getElementById("variablesForm");
const resultPromptText = document.getElementById("resultPromptText");
const copyFinalBtn = document.getElementById("copyFinalBtn");
const copyOriginalBtn = document.getElementById("copyOriginalBtn");
const exportCsvBtn = document.getElementById("exportCsvBtn");
const openEvaluatorBtn = document.getElementById("openEvaluatorBtn");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    renderPrompts();
    setupEventListeners();
});

function setupEventListeners() {
    // Search input listener
    searchInput.addEventListener("input", () => {
        renderPrompts();
    });

    // Category tabs filter
    categoryTabs.addEventListener("click", (e) => {
        const btn = e.target.closest(".tab-btn");
        if (!btn) return;

        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeCategory = btn.dataset.category;
        renderPrompts();
    });

    // Modal Close
    closeModalBtn.addEventListener("click", closeModal);
    variableModal.addEventListener("click", (e) => {
        if (e.target === variableModal) closeModal();
    });

    // Copy buttons in modal
    copyFinalBtn.addEventListener("click", () => {
        copyToClipboard(resultPromptText.value, "Prompt personalizado copiado al portapapeles");
    });

    copyOriginalBtn.addEventListener("click", () => {
        if (currentPromptItem) {
            copyToClipboard(currentPromptItem.prompt, "Prompt original con [VARIABLES] copiado");
        }
    });

    // Export CSV
    exportCsvBtn.addEventListener("click", downloadCSV);

    // Open Evaluator Side Quest
    openEvaluatorBtn.addEventListener("click", () => {
        const evaluator = PROMPTS_DATA.find(p => p.isSideQuest);
        if (evaluator) openModal(evaluator);
    });
}

// Render Prompt Cards
function renderPrompts() {
    const query = searchInput.value.toLowerCase().trim();

    const filtered = PROMPTS_DATA.filter(item => {
        const matchesCategory = (activeCategory === "ALL" || item.categoria === activeCategory);
        const matchesSearch = !query || (
            item.nombre.toLowerCase().includes(query) ||
            item.prompt.toLowerCase().includes(query) ||
            item.categoria.toLowerCase().includes(query) ||
            item.modelo.toLowerCase().includes(query) ||
            item.ejemplo.toLowerCase().includes(query)
        );
        return matchesCategory && matchesSearch;
    });

    promptsGrid.innerHTML = "";

    if (filtered.length === 0) {
        promptsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>No se encontraron prompts con los criterios especificados.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = `prompt-card ${item.isSideQuest ? 'highlight-quest' : ''}`;
        
        // Highlight variables in code block
        const highlightedPrompt = escapeHtml(item.prompt).replace(/\[([A-Z0-9_:\s/-]+)\]/g, '<mark>[$1]</mark>');

        card.innerHTML = `
            <div>
                <div class="card-top">
                    <span class="cat-badge cat-${item.categoria}">${item.categoria}</span>
                    <span class="card-version">${item.version}</span>
                </div>
                <h3 class="card-title">${item.nombre} ${item.isSideQuest ? '🏆' : ''}</h3>
                <div class="card-model">
                    <i class="fa-solid fa-robot"></i> ${item.modelo}
                </div>
                <div class="card-prompt-box">${highlightedPrompt}</div>
                <div class="card-usage">
                    <strong><i class="fa-solid fa-lightbulb"></i> Ejemplo de Uso:</strong> ${item.ejemplo}
                </div>
            </div>
            <div class="card-actions">
                <button class="btn btn-secondary btn-copy-card" data-id="${item.id}">
                    <i class="fa-solid fa-copy"></i> Copiar
                </button>
                <button class="btn btn-primary btn-fill-card" data-id="${item.id}">
                    <i class="fa-solid fa-sliders"></i> Usar Plantilla
                </button>
            </div>
        `;

        promptsGrid.appendChild(card);
    });

    // Add card button listeners
    document.querySelectorAll(".btn-copy-card").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            const item = PROMPTS_DATA.find(p => p.id === id);
            if (item) copyToClipboard(item.prompt, `"${item.nombre}" copiado al portapapeles`);
        });
    });

    document.querySelectorAll(".btn-fill-card").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            const item = PROMPTS_DATA.find(p => p.id === id);
            if (item) openModal(item);
        });
    });
}

// Modal Logic & Variable Parsing
function openModal(item) {
    currentPromptItem = item;
    modalTitle.textContent = item.nombre;
    modalCategory.textContent = item.categoria;

    // Extract variables inside [VARIABLE_NAME]
    const matches = item.prompt.match(/\[([A-Z0-9_:\s/-]+)\]/g) || [];
    const uniqueVariables = [...new Set(matches.map(m => m.replace(/^\[|\]$/g, '')))];

    variablesForm.innerHTML = "";

    if (uniqueVariables.length === 0) {
        variablesForm.innerHTML = "<p style='color: var(--text-muted); font-size: 0.85rem;'>Este prompt no requiere variables externas.</p>";
    } else {
        uniqueVariables.forEach(varName => {
            const field = document.createElement("div");
            field.className = "field-group";
            field.innerHTML = `
                <label for="var_${varName}">[${varName}]</label>
                <input type="text" id="var_${varName}" data-var="${varName}" placeholder="Introduce ${varName.toLowerCase()}...">
            `;
            variablesForm.appendChild(field);
        });
    }

    updateResultPrompt();

    // Listeners for variable inputs
    variablesForm.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", updateResultPrompt);
    });

    variableModal.classList.add("active");
}

function updateResultPrompt() {
    if (!currentPromptItem) return;

    let text = currentPromptItem.prompt;
    const inputs = variablesForm.querySelectorAll("input");

    inputs.forEach(input => {
        const varName = input.dataset.var;
        const val = input.value.trim();
        if (val) {
            const regex = new RegExp(`\\[${escapeRegExp(varName)}\\]`, 'g');
            text = text.replace(regex, val);
        }
    });

    resultPromptText.value = text;
}

function closeModal() {
    variableModal.classList.remove("active");
    currentPromptItem = null;
}

// Toast notification
function copyToClipboard(text, msg = "Copiado al portapapeles") {
    navigator.clipboard.writeText(text).then(() => {
        toastMessage.textContent = msg;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 3000);
    });
}

// CSV Download Generator
function downloadCSV() {
    let csv = "NOMBRE,CATEGORÍA,MODELO,PROMPT,EJEMPLO DE USO,VERSIÓN\n";
    PROMPTS_DATA.forEach(p => {
        csv += `"${escapeCsv(p.nombre)}","${escapeCsv(p.categoria)}","${escapeCsv(p.modelo)}","${escapeCsv(p.prompt)}","${escapeCsv(p.ejemplo)}","${escapeCsv(p.version)}"\n`;
    });

    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "biblioteca_prompts_s10.csv";
    link.click();
}

// Utilities
function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeCsv(str) {
    return str.replace(/"/g, '""');
}
