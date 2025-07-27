// ===== GLOBAL VARIABLES =====
let currentTestimonial = 0
let booksLoaded = 24
const totalBooks = 10000
let isAudioPlaying = false
let currentTheme = "dark" // Default to dark theme

// Book data with real-looking covers
const bookDatabase = {
  fiction: [
    {
      title: "The Midnight Garden",
      author: "Elena Rodriguez",
      rating: 4.8,
      price: 12.99,
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop",
    },
    {
      title: "Whispers in Time",
      author: "James Mitchell",
      rating: 4.6,
      price: 14.99,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop",
    },
    {
      title: "The Last Chronicle",
      author: "Sarah Chen",
      rating: 4.9,
      price: 16.99,
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=300&fit=crop",
    },
    {
      title: "Shadows of Tomorrow",
      author: "Michael Thompson",
      rating: 4.7,
      price: 13.99,
      cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=300&fit=crop",
    },
  ],
  mystery: [
    {
      title: "The Silent Storm",
      author: "Lisa Anderson",
      rating: 4.5,
      price: 15.99,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop",
    },
    {
      title: "Secrets of the Deep",
      author: "David Wilson",
      rating: 4.8,
      price: 17.99,
      cover: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=200&h=300&fit=crop",
    },
    {
      title: "The Crimson Dawn",
      author: "Emma Johnson",
      rating: 4.6,
      price: 14.99,
      cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=200&h=300&fit=crop",
    },
    {
      title: "Voices from Beyond",
      author: "Robert Davis",
      rating: 4.7,
      price: 16.99,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop",
    },
  ],
  romance: [
    {
      title: "Dreams of Fire",
      author: "Maria Garcia",
      rating: 4.9,
      price: 11.99,
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop",
    },
    {
      title: "The Golden Thread",
      author: "John Smith",
      rating: 4.4,
      price: 13.99,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop",
    },
    {
      title: "Winds of Change",
      author: "Anna Brown",
      rating: 4.7,
      price: 15.99,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop",
    },
    {
      title: "Rivers of Time",
      author: "Chris Taylor",
      rating: 4.6,
      price: 12.99,
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop",
    },
  ],
  "sci-fi": [
    {
      title: "The Starlight Prophecy",
      author: "Jessica White",
      rating: 4.8,
      price: 18.99,
      cover: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=200&h=300&fit=crop",
    },
    {
      title: "Echoes of Eternity",
      author: "Mark Johnson",
      rating: 4.5,
      price: 16.99,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop",
    },
    {
      title: "The Crystal Path",
      author: "Amy Davis",
      rating: 4.7,
      price: 17.99,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop",
    },
    {
      title: "Quantum Dreams",
      author: "Brian Wilson",
      rating: 4.6,
      price: 19.99,
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop",
    },
  ],
  fantasy: [
    {
      title: "The Forgotten Realm",
      author: "Sophie Turner",
      rating: 4.9,
      price: 15.99,
      cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
    },
    {
      title: "Tales of Wonder",
      author: "Oliver Stone",
      rating: 4.7,
      price: 14.99,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop",
    },
    {
      title: "The Mystic Journey",
      author: "Luna Martinez",
      rating: 4.8,
      price: 16.99,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop",
    },
    {
      title: "The Enchanted Forest",
      author: "Phoenix Wright",
      rating: 4.6,
      price: 13.99,
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop",
    },
  ],
  biography: [
    {
      title: "Legends Untold",
      author: "Victoria Adams",
      rating: 4.5,
      price: 19.99,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=300&fit=crop",
    },
    {
      title: "The Visionary",
      author: "Alexander Pope",
      rating: 4.8,
      price: 22.99,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=300&fit=crop",
    },
    {
      title: "Against All Odds",
      author: "Grace Kelly",
      rating: 4.7,
      price: 18.99,
      cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=300&fit=crop",
    },
    {
      title: "The Pioneer",
      author: "Marcus Thompson",
      rating: 4.6,
      price: 21.99,
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop",
    },
  ],
}

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  // Set dark theme by default
  document.documentElement.setAttribute("data-theme", "dark")

  // Show ink pot loader first
  showInkPotLoader()

  // Remove book opening animation after delay
  setTimeout(() => {
    const bookOpening = document.getElementById("book-opening")
    if (bookOpening) {
      bookOpening.style.display = "none"
    }
  }, 4000)

  // Hide ink pot loader
  setTimeout(() => {
    hideInkPotLoader()
  }, 3000)

  // Initialize all components
  initializeInkTrail()
  initializeNavigation()
  initializeScrollAnimations()
  initializeTestimonialCarousel()
  initializeAudioPlayer()
  initializeThemeToggle()
  initializeFilterSystem()
  initializeBookGeneration()
  initializeCountdownTimer()
  initializeFormValidation()
  initializeBookPreview()

  // Show audio player after a delay
  setTimeout(() => {
    const audioPlayer = document.getElementById("audio-player")
    if (audioPlayer) {
      audioPlayer.classList.add("active")
    }
  }, 5000)
}

// ===== INK POT LOADER =====
function showInkPotLoader() {
  const loader = document.getElementById("ink-pot-loader")
  if (loader) {
    loader.style.display = "flex"
  }
}

function hideInkPotLoader() {
  const loader = document.getElementById("ink-pot-loader")
  if (loader) {
    loader.style.opacity = "0"
    setTimeout(() => {
      loader.style.display = "none"
    }, 500)
  }
}

// ===== INK TRAIL EFFECT =====
function initializeInkTrail() {
  const canvas = document.getElementById("ink-trail")
  if (!canvas) return

  const ctx = canvas.getContext("2d")
  const trails = []
  const inkDrops = []

  function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  function createTrail(x, y) {
    trails.push({
      x: x,
      y: y,
      size: Math.random() * 8 + 3,
      life: 1,
      decay: Math.random() * 0.02 + 0.01,
      color: `rgba(201, 169, 89, ${Math.random() * 0.5 + 0.3})`,
    })
  }

  function createInkDrop() {
    inkDrops.push({
      x: Math.random() * canvas.width,
      y: -20,
      size: Math.random() * 15 + 5,
      speed: Math.random() * 3 + 1,
      life: 1,
      decay: 0.005,
    })
  }

  function updateTrails() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update mouse trails
    for (let i = trails.length - 1; i >= 0; i--) {
      const trail = trails[i]

      ctx.save()
      ctx.globalAlpha = trail.life
      ctx.fillStyle = trail.color
      ctx.beginPath()
      ctx.arc(trail.x, trail.y, trail.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      trail.life -= trail.decay
      trail.size *= 0.98

      if (trail.life <= 0) {
        trails.splice(i, 1)
      }
    }

    // Update ink drops
    for (let i = inkDrops.length - 1; i >= 0; i--) {
      const drop = inkDrops[i]

      ctx.save()
      ctx.globalAlpha = drop.life
      ctx.fillStyle = "#c9a959"
      ctx.beginPath()
      ctx.arc(drop.x, drop.y, drop.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      drop.y += drop.speed
      drop.life -= drop.decay

      if (drop.y > canvas.height || drop.life <= 0) {
        inkDrops.splice(i, 1)
      }
    }

    requestAnimationFrame(updateTrails)
  }

  // Mouse trail
  document.addEventListener("mousemove", (e) => {
    if (Math.random() < 0.4) {
      createTrail(e.clientX + (Math.random() - 0.5) * 30, e.clientY + (Math.random() - 0.5) * 30)
    }
  })

  // Random ink drops
  setInterval(() => {
    if (Math.random() < 0.1) {
      createInkDrop()
    }
  }, 2000)

  resizeCanvas()
  updateTrails()

  window.addEventListener("resize", resizeCanvas)
}

// ===== NAVIGATION =====
function initializeNavigation() {
  const navbar = document.querySelector(".navbar")
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(26, 26, 26, 0.98)"
      navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.5)"
    } else {
      navbar.style.background = "rgba(26, 26, 26, 0.95)"
      navbar.style.boxShadow = "none"
    }
  })

  // Mobile menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")

        // Add page turn effect for sections
        if (entry.target.classList.contains("section")) {
          entry.target.classList.add("page-turn")
        }
      }
    })
  }, observerOptions)

  // Observe elements for animations
  document.querySelectorAll(".feature-card, .author-card, .amazon-book, .testimonial-card").forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })

  // Text reveal animations
  document.querySelectorAll(".section-title, .hero-description").forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
}

// ===== TESTIMONIAL CAROUSEL =====
function initializeTestimonialCarousel() {
  const testimonials = document.querySelectorAll(".testimonial-card")
  const dots = document.querySelectorAll(".dot")

  if (testimonials.length === 0) return

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle("active", i === index)
    })

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index)
    })

    currentTestimonial = index
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showTestimonial(index)
    })
  })

  // Auto-advance testimonials
  setInterval(() => {
    const nextIndex = (currentTestimonial + 1) % testimonials.length
    showTestimonial(nextIndex)
  }, 5000)
}

// ===== AUDIO PLAYER =====
function initializeAudioPlayer() {
  const playBtn = document.getElementById("play-btn")
  const playerToggle = document.getElementById("player-toggle")
  const audioPlayer = document.getElementById("audio-player")
  const volumeSlider = document.querySelector(".volume-slider")
  const progressBar = document.querySelector(".progress-bar")
  const progressFill = document.querySelector(".progress-fill")

  if (!playBtn) return

  // Play/Pause functionality
  playBtn.addEventListener("click", () => {
    isAudioPlaying = !isAudioPlaying
    const icon = playBtn.querySelector("i")

    if (isAudioPlaying) {
      icon.className = "fas fa-pause"
      playBtn.style.background = "#a88a3f"
    } else {
      icon.className = "fas fa-play"
      playBtn.style.background = "#c9a959"
    }
  })

  // Player toggle
  if (playerToggle && audioPlayer) {
    playerToggle.addEventListener("click", () => {
      audioPlayer.classList.toggle("minimized")
      const icon = playerToggle.querySelector("i")
      icon.className = audioPlayer.classList.contains("minimized") ? "fas fa-chevron-down" : "fas fa-chevron-up"
    })
  }

  // Volume control
  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      const volume = e.target.value
      console.log("Volume set to:", volume)
    })
  }

  // Progress bar simulation
  if (progressBar && progressFill) {
    let progress = 0
    setInterval(() => {
      if (isAudioPlaying) {
        progress += 0.5
        if (progress > 100) progress = 0
        progressFill.style.width = progress + "%"

        // Update time display
        const currentTime = document.querySelector(".current-time")
        const minutes = Math.floor((progress * 225) / 100 / 60)
        const seconds = Math.floor(((progress * 225) / 100) % 60)
        if (currentTime) {
          currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`
        }
      }
    }, 1000)
  }
}

// ===== THEME TOGGLE =====
function initializeThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle")

  if (!themeToggle) return

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem("bookverse-theme") || "dark"
  setTheme(savedTheme)

  themeToggle.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light"
    setTheme(currentTheme)
    localStorage.setItem("bookverse-theme", currentTheme)
  })

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme)
    const icon = themeToggle.querySelector("i")
    icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon"
    currentTheme = theme
  }
}

// ===== FILTER SYSTEM =====
function initializeFilterSystem() {
  const filterTags = document.querySelectorAll(".filter-tag")
  const filterSelect = document.querySelector("#sort-select")

  filterTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      // Remove active class from all tags
      filterTags.forEach((t) => t.classList.remove("active"))
      // Add active class to clicked tag
      tag.classList.add("active")

      const filter = tag.getAttribute("data-filter")
      filterBooks(filter)
    })
  })

  if (filterSelect) {
    filterSelect.addEventListener("change", (e) => {
      sortBooks(e.target.value)
    })
  }

  function filterBooks(filter) {
    const bookCards = document.querySelectorAll(".amazon-book")
    bookCards.forEach((card) => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "flex"
        card.classList.add("fade-in")
      } else {
        card.style.display = "none"
      }
    })
  }

  function sortBooks(sortBy) {
    console.log("Sorting books by:", sortBy)

    // Add loading animation
    const bookshelf = document.getElementById("bookshelf")
    if (bookshelf) {
      bookshelf.classList.add("loading")
      setTimeout(() => {
        bookshelf.classList.remove("loading")
      }, 1000)
    }
  }
}

// ===== BOOK GENERATION =====
function initializeBookGeneration() {
  const bookshelf = document.getElementById("bookshelf")
  const loadMoreBtn = document.getElementById("load-more")

  if (!bookshelf) return

  function generateBook(bookData, genre) {
    const book = document.createElement("div")
    book.className = `amazon-book ${genre} fade-in`

    book.innerHTML = `
            <div class="amazon-book-cover">
                <img src="${bookData.cover}" alt="${bookData.title}" loading="lazy">
                <div class="book-spine"></div>
            </div>
            <div class="amazon-book-info">
                <h3 class="amazon-book-title">${bookData.title}</h3>
                <p class="amazon-book-author">by ${bookData.author}</p>
                <div class="amazon-book-rating">
                    ${generateStars(bookData.rating)}
                    <span>${bookData.rating}</span>
                </div>
                <p class="amazon-book-price">$${bookData.price}</p>
                <div class="amazon-book-actions">
                    <button class="amazon-book-btn preview" data-book='${JSON.stringify(bookData)}'>
                        <i class="fas fa-eye"></i> Preview
                    </button>
                    <button class="amazon-book-btn">
                        <i class="fas fa-heart"></i> Wishlist
                    </button>
                </div>
            </div>
        `

    // Add hover effects
    book.addEventListener("mouseenter", () => {
      book.style.transform = "translateY(-8px)"
    })

    book.addEventListener("mouseleave", () => {
      book.style.transform = "translateY(0)"
    })

    return book
  }

  function generateStars(rating) {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    let stars = ""

    for (let i = 0; i < fullStars; i++) {
      stars += '<i class="fas fa-star"></i>'
    }

    if (hasHalfStar) {
      stars += '<i class="fas fa-star-half-alt"></i>'
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars += '<i class="far fa-star"></i>'
    }

    return stars
  }

  function generateRandomBooks(count) {
    const genres = Object.keys(bookDatabase)
    const books = []

    for (let i = 0; i < count; i++) {
      const randomGenre = genres[Math.floor(Math.random() * genres.length)]
      const genreBooks = bookDatabase[randomGenre]
      const randomBook = genreBooks[Math.floor(Math.random() * genreBooks.length)]

      // Create variation of the book
      const bookVariation = {
        ...randomBook,
        title:
          randomBook.title +
          (Math.random() > 0.7 ? ` ${["II", "Returns", "Continues", "Reborn"][Math.floor(Math.random() * 4)]}` : ""),
        rating: (Math.random() * 2 + 3).toFixed(1),
        price: (Math.random() * 15 + 8).toFixed(2),
      }

      books.push({ book: bookVariation, genre: randomGenre })
    }

    return books
  }

  // Generate initial books
  const initialBooks = generateRandomBooks(booksLoaded)
  initialBooks.forEach(({ book, genre }) => {
    bookshelf.appendChild(generateBook(book, genre))
  })

  // Load more books
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...'

      setTimeout(() => {
        const booksToLoad = Math.min(24, totalBooks - booksLoaded)
        const newBooks = generateRandomBooks(booksToLoad)

        newBooks.forEach(({ book, genre }) => {
          bookshelf.appendChild(generateBook(book, genre))
        })

        booksLoaded += booksToLoad

        loadMoreBtn.innerHTML = '<i class="fas fa-book"></i> Load More Books'

        if (booksLoaded >= totalBooks) {
          loadMoreBtn.style.display = "none"
        }

        // Trigger scroll animations for new books
        const newBookElements = bookshelf.querySelectorAll(".amazon-book:not(.visible)")
        newBookElements.forEach((book, index) => {
          setTimeout(() => {
            book.classList.add("visible")
          }, index * 100)
        })
      }, 1500)
    })
  }
}

// ===== BOOK PREVIEW =====
function initializeBookPreview() {
  const modal = document.getElementById("preview-modal")
  const closeBtn = document.querySelector(".preview-close")

  if (!modal) return

  // Open preview
  document.addEventListener("click", (e) => {
    if (e.target.closest(".preview")) {
      e.preventDefault()
      const bookData = JSON.parse(e.target.closest(".preview").getAttribute("data-book"))
      openPreview(bookData)
    }
  })

  // Close preview
  closeBtn?.addEventListener("click", closePreview)
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closePreview()
  })

  function openPreview(bookData) {
    document.getElementById("preview-title").textContent = bookData.title
    document.getElementById("preview-cover").src = bookData.cover
    document.getElementById("preview-price").textContent = `$${bookData.price}`

    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }

  function closePreview() {
    modal.classList.remove("active")
    document.body.style.overflow = "auto"
  }
}

// ===== COUNTDOWN TIMER =====
function initializeCountdownTimer() {
  const daysEl = document.getElementById("days")
  const hoursEl = document.getElementById("hours")
  const minutesEl = document.getElementById("minutes")
  const secondsEl = document.getElementById("seconds")

  if (!daysEl) return

  // Set target date (5 days from now)
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 5)
  targetDate.setHours(23, 59, 59, 999)

  function updateTimer() {
    const now = new Date().getTime()
    const distance = targetDate.getTime() - now

    if (distance < 0) {
      daysEl.textContent = "00"
      hoursEl.textContent = "00"
      minutesEl.textContent = "00"
      secondsEl.textContent = "00"
      return
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    daysEl.textContent = days.toString().padStart(2, "0")
    hoursEl.textContent = hours.toString().padStart(2, "0")
    minutesEl.textContent = minutes.toString().padStart(2, "0")
    secondsEl.textContent = seconds.toString().padStart(2, "0")
  }

  updateTimer()
  setInterval(updateTimer, 1000)
}

// ===== FORM VALIDATION =====
function initializeFormValidation() {
  const loginForm = document.getElementById("login-form")
  const signupForm = document.getElementById("signup-form")

  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin)
  }

  if (signupForm) {
    signupForm.addEventListener("submit", handleSignup)

    // Password strength indicator
    const passwordInput = signupForm.querySelector("#password")
    const strengthBar = signupForm.querySelector(".strength-fill")
    const strengthText = signupForm.querySelector(".strength-text")

    if (passwordInput && strengthBar) {
      passwordInput.addEventListener("input", (e) => {
        const password = e.target.value
        const strength = calculatePasswordStrength(password)

        strengthBar.style.width = strength.percentage + "%"
        strengthBar.style.background = strength.color
        strengthText.textContent = strength.text
      })
    }
  }

  // Password toggle functionality
  document.querySelectorAll(".password-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const input = toggle.previousElementSibling
      const icon = toggle.querySelector("i")

      if (input.type === "password") {
        input.type = "text"
        icon.className = "fas fa-eye-slash"
      } else {
        input.type = "password"
        icon.className = "fas fa-eye"
      }
    })
  })
}

function handleLogin(e) {
  e.preventDefault()

  const submitBtn = e.target.querySelector('button[type="submit"]')
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...'
  submitBtn.disabled = true

  setTimeout(() => {
    alert("Login successful! Welcome back to BookVerse!")
    window.location.href = "index.html"
  }, 2000)
}

function handleSignup(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")

  if (password !== confirmPassword) {
    alert("Passwords do not match!")
    return
  }

  const submitBtn = e.target.querySelector('button[type="submit"]')
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...'
  submitBtn.disabled = true

  setTimeout(() => {
    alert("Welcome to BookVerse! Your premium journey begins now!")
    window.location.href = "index.html"
  }, 2000)
}

function calculatePasswordStrength(password) {
  let score = 0

  if (password.length >= 8) score += 25
  if (password.match(/[a-z]/)) score += 25
  if (password.match(/[A-Z]/)) score += 25
  if (password.match(/[0-9]/)) score += 25
  if (password.match(/[^a-zA-Z0-9]/)) score += 25

  if (score <= 25) {
    return { percentage: 25, color: "#dc3545", text: "Weak" }
  } else if (score <= 50) {
    return { percentage: 50, color: "#fd7e14", text: "Fair" }
  } else if (score <= 75) {
    return { percentage: 75, color: "#ffc107", text: "Good" }
  } else {
    return { percentage: 100, color: "#28a745", text: "Strong" }
  }
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
function initializeLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]')

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Initialize lazy loading when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeLazyLoading)
} else {
  initializeLazyLoading()
}

// ===== ERROR HANDLING =====
window.addEventListener("error", (e) => {
  console.error("BookVerse Error:", e.error)
})

// ===== ANALYTICS SIMULATION =====
function trackEvent(eventName, eventData) {
  console.log("Analytics Event:", eventName, eventData)
}

// Track page views
trackEvent("page_view", {
  page: window.location.pathname,
  timestamp: new Date().toISOString(),
})

// Track user interactions
document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-primary, .btn-secondary")) {
    trackEvent("button_click", {
      button_text: e.target.textContent.trim(),
      timestamp: new Date().toISOString(),
    })
  }
})
