<template>
  <div class="photos-container">
    <h2>Photo Gallery</h2>
    <div class="gallery-grid">
      <div 
        v-for="(url, index) in photoUrls" 
        :key="index" 
        class="photo-item" 
        @click="openLightbox(index)"
      >
        <div class="img-wrapper">
            <img :src="url" loading="lazy" :alt="'Apartment photo ' + (index + 1)" />
            <div class="overlay">
                <span>View</span>
            </div>
        </div>
      </div>
    </div>
    
    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <div class="lightbox-content" @click.stop>
            <img :src="photoUrls[currentIndex]" />
            <button class="close-btn" @click="closeLightbox">×</button>
            <button class="nav-btn prev" @click="prev">❮</button>
            <button class="nav-btn next" @click="next">❯</button>
            <div class="counter">{{ currentIndex + 1 }} / {{ photoUrls.length }}</div>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps(['photoUrls'])
const lightboxOpen = ref(false)
const currentIndex = ref(0)

const openLightbox = (index) => {
    currentIndex.value = index
    lightboxOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
    lightboxOpen.value = false
    document.body.style.overflow = 'auto'
}

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.photoUrls.length
}

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + props.photoUrls.length) % props.photoUrls.length
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
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
}

.photo-item {
    cursor: pointer;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
}

.img-wrapper {
    position: relative;
    padding-top: 75%; /* 4:3 Aspect Ratio */
    overflow: hidden;
}

.img-wrapper img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.photo-item:hover img {
    transform: scale(1.1);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
}

.overlay span {
    color: white;
    border: 1px solid white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
}

.photo-item:hover .overlay {
    opacity: 1;
}

/* Lightbox */
.lightbox {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.95);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    backdrop-filter: blur(5px);
}

.lightbox-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
}

.lightbox-content img {
    max-width: 100%;
    max-height: 90vh;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
    border-radius: 4px;
}

.nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.1);
    border: none;
    color: white;
    font-size: 2rem;
    padding: 1rem;
    cursor: pointer;
    transition: background 0.3s;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-btn:hover {
    background: rgba(255,255,255,0.3);
}

.prev { left: -80px; }
.next { right: -80px; }

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

.counter {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-family: sans-serif;
}

@media (max-width: 768px) {
    .prev { left: 10px; }
    .next { right: 10px; }
    .nav-btn { background: rgba(0,0,0,0.5); }
}
</style>
