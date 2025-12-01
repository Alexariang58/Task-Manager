# Historias de Usuario

## Épica: Inicialización y Onboarding

### HU-01: Onboarding de Usuario
**Como** nuevo usuario  
**Quiero** ver una introducción interactiva cuando abro la aplicación por primera vez  
**Para** entender rápidamente el valor de la aplicación y cómo funciona.

**Criterios de Aceptación:**
- [x] La pantalla de onboarding debe aparecer solo la primera vez que se abre la app.
- [x] Debe haber 3 pasos explicativos con iconos y descripciones claras.
- [x] Debe incluir animaciones suaves entre pasos (Framer Motion).
- [x] Al finalizar, el usuario debe ser redirigido al Dashboard.
- [x] El estado de "onboarding completado" debe persistir (usando LocalStorage/Zustand) para no mostrarlo en futuras visitas.

### HU-02: Arquitectura PWA
**Como** usuario móvil  
**Quiero** poder instalar la aplicación en mi dispositivo  
**Para** acceder a ella rápidamente y usarla como una app nativa.

**Criterios de Aceptación:**
- [ ] La aplicación debe ser instalable (Manifest.json configurado).
- [ ] Debe funcionar offline (Service Workers).
- [ ] Debe tener un diseño responsive que se adapte a móviles.

---

## Épica: Gestión de Tareas (Próximamente)

### HU-03: Dashboard Principal
**Como** usuario  
**Quiero** ver un resumen de mis tareas y eventos  
**Para** tener una visión clara de mi día.
