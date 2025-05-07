
        const lessons = document.querySelectorAll('.lesson');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        let currentLessonIndex = 0;

        function showLesson(index) {
            // Ocultar todas las lecciones
            lessons.forEach(lesson => lesson.classList.remove('active'));

            // Mostrar la lección seleccionada
            if (lessons[index]) {
                lessons[index].classList.add('active');
                currentLessonIndex = index;
            }

            // Actualizar estado de los botones
            prevBtn.disabled = currentLessonIndex === 0;
            nextBtn.disabled = currentLessonIndex === lessons.length - 1;

             // Hacer scroll hacia arriba al cambiar de lección
             window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Event Listeners para los botones
        prevBtn.addEventListener('click', () => {
            if (currentLessonIndex > 0) {
                showLesson(currentLessonIndex - 1);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentLessonIndex < lessons.length - 1) {
                showLesson(currentLessonIndex + 1);
            }
        });

        // Mostrar la primera lección al cargar
        showLesson(0);

        
 