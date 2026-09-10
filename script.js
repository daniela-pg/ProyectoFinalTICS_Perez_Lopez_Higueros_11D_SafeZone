/* =====================================================
   IRTRA SAFEZONE
   JAVASCRIPT
===================================================== */


/* =====================================================
   NAVEGACIÓN SUAVE
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


/* =====================================================
   MENÚ MOBILE
===================================================== */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if (icon) {

            if (navMenu.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

}


/* =====================================================
   CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
===================================================== */

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuButton) {

            const icon = menuButton.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });

});


/* =====================================================
   SIMULACIÓN
===================================================== */

const simulateButton = document.getElementById("simulateButton");
const simPerson = document.getElementById("simPerson");
const detectionRing = document.getElementById("detectionRing");
const simulationStatus = document.getElementById("simulationStatus");
const simTime = document.getElementById("simTime");

let simulationRunning = false;

if (simulateButton) {

    simulateButton.addEventListener("click", () => {

        /* REINICIAR */

        if (
            simulateButton.textContent.includes("Reiniciar") &&
            !simulationRunning
        ) {

            if (simPerson) {
                simPerson.style.left = "25%";
            }

            if (detectionRing) {

                detectionRing.style.left = "calc(25% - 22px)";
                detectionRing.classList.remove("active");

            }

            if (simTime) {
                simTime.textContent = "SISTEMA ACTIVO";
            }

            if (simulationStatus) {

                simulationStatus.innerHTML = `
                    <div class="sim-status-icon">
                        <i class="fa-solid fa-shield-halved"></i>
                    </div>

                    <div>
                        <strong>Sistema preparado</strong>
                        <p>Presiona "Simular detección" para iniciar.</p>
                    </div>
                `;

            }

            simulateButton.innerHTML =
                '<i class="fa-solid fa-radar"></i> Simular detección';

            return;
        }


        /* EVITAR DOBLE CLIC */

        if (simulationRunning) {
            return;
        }


        simulationRunning = true;


        simulateButton.innerHTML =
            '<i class="fa-solid fa-spinner fa-spin"></i> Detectando...';


        if (simTime) {
            simTime.textContent = "ANALIZANDO PRESENCIA";
        }


        if (simulationStatus) {

            simulationStatus.innerHTML = `
                <div class="sim-status-icon">
                    <i class="fa-solid fa-radar"></i>
                </div>

                <div>
                    <strong>Presencia detectada</strong>
                    <p>Analizando ubicación...</p>
                </div>
            `;

        }


        /* MOVER PERSONA */

        setTimeout(() => {

            if (simPerson) {
                simPerson.style.left = "67%";
            }

            if (detectionRing) {

                detectionRing.style.left = "calc(67% - 22px)";
                detectionRing.classList.add("active");

            }


            if (simTime) {
                simTime.textContent = "⚠ ALERTA DETECTADA";
            }


            if (simulationStatus) {

                simulationStatus.innerHTML = `
                    <div class="sim-status-icon alert-status-icon">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                    </div>

                    <div>
                        <strong class="alert-status-text">
                            ¡Área restringida detectada!
                        </strong>

                        <p>
                            El sistema generó una alerta de seguridad.
                        </p>
                    </div>
                `;

            }


            simulateButton.innerHTML =
                '<i class="fa-solid fa-rotate-right"></i> Reiniciar';


            simulationRunning = false;

        }, 1800);

    });

}


/* =====================================================
   MODAL DE PROPUESTA
===================================================== */

const proposalButton = document.getElementById("proposalButton");
const proposalModal = document.getElementById("proposalModal");
const closeModal = document.getElementById("closeModal");
const modalCloseButton = document.getElementById("modalCloseButton");


function openModal() {

    if (proposalModal) {

        proposalModal.classList.add("active");

        document.body.style.overflow = "hidden";

    }

}


function closeProposalModal() {

    if (proposalModal) {

        proposalModal.classList.remove("active");

        document.body.style.overflow = "";

    }

}


if (proposalButton) {
    proposalButton.addEventListener("click", openModal);
}


if (closeModal) {
    closeModal.addEventListener("click", closeProposalModal);
}


if (modalCloseButton) {
    modalCloseButton.addEventListener("click", closeProposalModal);
}


/* CERRAR AL HACER CLICK FUERA */

if (proposalModal) {

    proposalModal.addEventListener("click", (event) => {

        if (event.target === proposalModal) {
            closeProposalModal();
        }

    });

}


/* CERRAR CON ESCAPE */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeProposalModal();
    }

});


/* =====================================================
   ANIMACIONES AL HACER SCROLL
===================================================== */

const elementsToReveal = document.querySelectorAll(
    ".problem-card, .process-card, .benefit-card, .component, .solution-content, .prototype-content, .team-card, .video-card"
);


elementsToReveal.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


elementsToReveal.forEach(element => {
    observer.observe(element);
});


/* =====================================================
   ALERTA DEL DASHBOARD
===================================================== */

const alertCard = document.getElementById("alertCard");
const person = document.getElementById("person");


setInterval(() => {

    if (!alertCard || !person) {
        return;
    }

    person.style.left = "62%";


    setTimeout(() => {

        person.style.left = "32%";

    }, 2500);

}, 5000);


/* =====================================================
   HORA / ESTADO DEL SISTEMA
===================================================== */

function updateSystemTime() {

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const timeElement = document.getElementById("simTime");


    if (
        timeElement &&
        !timeElement.textContent.includes("ALERTA") &&
        !timeElement.textContent.includes("ANALIZANDO")
    ) {

        timeElement.textContent =
            `SISTEMA ACTIVO · ${hours}:${minutes}:${seconds}`;

    }

}


setInterval(updateSystemTime, 1000);

updateSystemTime();
