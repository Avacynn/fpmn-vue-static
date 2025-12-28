<template>
  <div class="layouts-container">
    <div class="layouts-grid">
      <div 
        v-for="(layout, index) in layouts.options" 
        :key="index" 
        class="layout-card"
        @click="openLightbox(index)"
      >
        <div class="layout-image-wrapper" v-if="layout.image">
            <img :src="layout.image" :alt="layout.type + ' Floor Plan'" />
            <div class="overlay">
                <span>View Plan</span>
            </div>
        </div>
        <div class="layout-info">
            <h3>{{ layout.type }}</h3>
            <p class="sqft">{{ layout.sqft }} sq. ft.</p>
        </div>
      </div>
    </div>
    <p class="layout-subtext" v-if="layouts.subtext">{{ layouts.subtext }}</p>
    
    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
            <img :src="layouts.options[currentIndex].image" />
            <button class="close-btn" @click="closeLightbox">×</button>
            <button class="nav-btn prev" @click="prev" v-if="layouts.options.length > 1">❮</button>
            <button class="nav-btn next" @click="next" v-if="layouts.options.length > 1">❯</button>
            <div class="counter">{{ currentIndex + 1 }} / {{ layouts.options.length }}</div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps(['layouts'])
const lightboxOpen = ref(false)
const currentIndex = ref(0)

const openLightbox = (index) => {
    if (!props.layouts.options[index].image) return
    currentIndex.value = index
    lightboxOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
    lightboxOpen.value = false
    document.body.style.overflow = 'auto'
}

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.layouts.options.length
}

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + props.layouts.options.length) % props.layouts.options.length
}

const handleKeydown = (e) => {
    if (!lightboxOpen.value) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>

<style scoped>
.layouts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 1.5rem;
}

.layout-card {
    background: var(--bg-surface);
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.layout-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.layout-image-wrapper {
    position: relative;
    height: 200px;
    background: #f5f5f5;
    overflow: hidden;
}

.layout-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
    transition: transform 0.3s ease;
}

.layout-card:hover .layout-image-wrapper img {
    transform: scale(1.05);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.layout-card:hover .overlay {
    opacity: 1;
}

.overlay span {
    color: white;
    border: 2px solid white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    background: rgba(0,0,0,0.5);
}

.layout-info {
    padding: 1.5rem;
    text-align: center;
    border-top: 1px solid var(--border-color);
}

.layout-info h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.layout-info .sqft {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--text-muted);
}

.layout-subtext {
    text-align: center;
    font-style: italic;
    color: var(--text-muted);
    max-width: 800px;
    margin: 0 auto;
}

/* Lightbox Styles (Duplicated from Photos.vue for self-containment) */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lightbox-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
}

.lightbox-content img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 4px;
}

.close-btn {
    position: absolute;
    top: -40px;
    right: 0;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
}

.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    font-size: 2rem;
    padding: 1rem;
    cursor: pointer;
    border-radius: 50%;
    transition: background 0.3s;
}

.nav-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}

.prev { left: -60px; }
.next { right: -60px; }

.counter {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .nav-btn {
        padding: 0.5rem;
        font-size: 1.5rem;
    }
    .prev { left: -40px; }
    .next { right: -40px; }
}
</style>
