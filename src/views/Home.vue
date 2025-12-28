<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Frontier Properties - Home',
  meta: [
    {
      name: 'description',
      content: 'Exceptional Living in Mora and Pine City, Minnesota. Explore our properties today.'
    },
    {
      property: 'og:title',
      content: 'Frontier Properties - Home'
    },
    {
      property: 'og:description',
      content: 'Exceptional Living in Mora and Pine City, Minnesota. Explore our properties today.'
    },
    {
      property: 'og:image',
      content: '/assets/img/pinecity/pinecity-bg.png'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://frontierpropertiesmn.com/'
    }
  ]
})
</script>

<template>
  <div id="home">
    <div class="overlay">
      <div class="content">
        <h1>Frontier Properties</h1>
        <p class="subtitle">Exceptional Living in Mora and Pine City, Minnesota</p>
        <div class="button-group">
          <button class="btn primary" @click="$router.push('/mora')">
            <span>Explore Mora</span>
            <span class="arrow">→</span>
          </button>
          <button class="btn secondary" @click="$router.push('/pinecity')">
            <span>Explore Pine City</span>
            <span class="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#home {
    background-image: url('/assets/img/pinecity/pinecity-bg.png');
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    position: relative;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content {
    text-align: center;
    color: white;
    padding: 1rem;
    max-width: 800px;
    animation: fadeIn 1s ease-out;
}

h1 {
    font-size: 4rem;
    margin-bottom: 0.25rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.subtitle {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 300;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.button-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    min-width: 200px;
    justify-content: center;
}

.btn.primary {
    background-color: var(--primary-color);
    color: white;
    box-shadow: 0 4px 15px rgba(46, 125, 50, 0.4);
}

.btn.primary:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(46, 125, 50, 0.6);
}

.btn.secondary {
    background-color: rgba(255, 255, 255, 0.9);
    color: var(--primary-dark);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.btn.secondary:hover {
    background-color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.arrow {
    transition: transform 0.3s ease;
}

.btn:hover .arrow {
    transform: translateX(5px);
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    .subtitle { font-size: 1.2rem; }
    .button-group { flex-direction: column; gap: 1rem; }
    .btn { width: 100%; }
}
</style>
