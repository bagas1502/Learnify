const courses = [
    {
      id: 1,
      title: "Веб-разработка для начинающих",
      category: "programming",
      description: "Изучите основы HTML, CSS и JavaScript для создания современных сайтов.",
      img: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
      price: "3 000 ₽",
    },
    {
      id: 2,
      title: "Продвинутый JavaScript",
      category: "programming",
      description: "Глубокое погружение в JS: асинхронность, промисы, модули, классы.",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      price: "4 500 ₽",
    },
    {
      id: 3,
      title: "Основы дизайна",
      category: "design",
      description: "Научитесь базовым принципам дизайна, работе с цветом и типографикой.",
      img: "https://cdn-icons-png.flaticon.com/512/2877/2877112.png",
      price: "2 500 ₽",
    },
    {
      id: 4,
      title: "Adobe Photoshop с нуля",
      category: "adobe-photoshop",
      description: "Освойте инструменты и техники редактирования фотографий в Photoshop.",
      img: "https://cdn-icons-png.flaticon.com/256/5968/5968520.png",
      price: "3 200 ₽",
    },
    {
      id: 5,
      title: "Figma: дизайн интерфейсов",
      category: "figma",
      description: "Создавайте интерактивные прототипы и дизайн интерфейсов в Figma.",
      img: "https://cdn-icons-png.flaticon.com/256/5968/5968705.png",
      price: "3 800 ₽",
    },
    {
      id: 6,
      title: "Основы маркетинга",
      category: "marketing",
      description: "Изучите ключевые стратегии и инструменты маркетинга для бизнеса.",
      img: "https://cdn-icons-png.flaticon.com/512/633/633759.png",
      price: "2 800 ₽",
    },
    {
      id: 7,
      title: "Adobe Illustrator для новичков",
      category: "adobe-illustrator",
      description: "Учитесь создавать векторную графику и иллюстрации.",
      img: "https://cdn-icons-png.flaticon.com/512/888/888847.png",
      price: "3 100 ₽",
    },
    {
      id: 8,
      title: "Видео монтаж в Adobe Premiere Pro",
      category: "adobe-premiere-pro",
      description: "Освойте монтаж и обработку видео в Premiere Pro.",
      img: "https://cdn-icons-png.flaticon.com/512/2306/2306150.png",
      price: "3 700 ₽",
    },
    {
      id: 9,
      title: "Анимация в Adobe After Effects",
      category: "adobe-after-effects",
      description: "Создавайте анимацию и спецэффекты в After Effects.",
      img: "https://cdn-icons-png.flaticon.com/512/2306/2306156.png",
      price: "3 900 ₽",
    },
    {
      id: 10,
      title: "Обработка фото в Adobe Lightroom",
      category: "adobe-lightroom",
      description: "Научитесь профессиональной обработке фото в Lightroom.",
      img: "https://cdn-icons-png.flaticon.com/512/888/888847.png",
      price: "3 000 ₽",
    },
    {
      id: 11,
      title: "3D моделирование в Blender",
      category: "blender",
      description: "Основы 3D моделирования, текстурирования и рендеринга в Blender.",
      img: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
      price: "4 200 ₽",
    },
  ];

  const courseGrid = document.getElementById('course-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const navButtons = document.querySelectorAll('.nav-btn');
  const navMobileButtons = document.querySelectorAll('.nav-btn-mobile');

  // Отрисовка курсов по массиву
  function renderCourses(filteredCourses) {
    courseGrid.innerHTML = '';
    if (filteredCourses.length === 0) {
      courseGrid.innerHTML = '<p class="text-gray-600 col-span-full text-center">Курсы не найдены.</p>';
      return;
    }
    filteredCourses.forEach(course => {
      const card = document.createElement('div');
      card.className = 'bg-white rounded-lg shadow p-4 flex flex-col';
      card.innerHTML = `
        <img src="${course.img}" alt="${course.title}" class="course-img mb-3" />
        <h3 class="text-xl font-semibold mb-2">${course.title}</h3>
        <p class="text-gray-600 flex-grow">${course.description}</p>
        <div class="mt-3 flex items-center justify-between">
          <span class="font-bold text-red-600">${course.price}</span>
          <button class="btn-enroll text-white px-4 py-2 rounded-md cursor-pointer">Записаться</button>
        </div>
      `;
      courseGrid.appendChild(card);
    });
  }

  // Изначально показываем все курсы
  renderCourses(courses);

  // Фильтрация по категориям
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        renderCourses(courses);
      } else {
        const filtered = courses.filter(c => c.category === filter);
        renderCourses(filtered);
      }
    });
  });

  // Скролл к секции по клику в меню
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      scrollToSection(btn.getAttribute('data-target'));
    });
  });

  navMobileButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navMobileButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      scrollToSection(btn.getAttribute('data-target'));
      // Скрыть мобильное меню после выбора
      mobileMenu.classList.add('hidden');
    });
  });

  // Мобильное меню кнопка
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });