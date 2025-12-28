<template>
  <div v-if="data" class="apartment-page">
    <!-- Hero Section -->
    <header class="hero" :style="{ backgroundImage: `url(${data.photoUrls[0]})` }">
        <div class="hero-overlay">
            <div class="hero-content container">
                <button class="back-btn" @click="$router.push('/')">← Back to Home</button>
                <h1>{{ data.title }}</h1>
                <p class="address">{{ data.address }}</p>
                <div class="hero-actions">
                    <a href="#contact" class="cta-btn">Schedule a Tour</a>
                    <a href="#photos" class="secondary-btn">View Photos</a>
                </div>
            </div>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="sticky-nav">
        <div class="container nav-content">
            <span class="brand">{{ data.name }}</span>
            <div class="links">
                <a href="#features">Features</a>
                <a href="#neighborhood">Neighborhood</a>
                <a href="#photos">Photos</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </nav>

    <main class="container">
        <!-- Welcome Section -->
        <section id="welcome" class="section">
            <div class="card">
                <h2>Welcome Home</h2>
                <p class="lead">{{ data.welcomeText }}</p>
            </div>
        </section>

        <!-- Features / Amenities -->
        <section id="features" class="section">
            <Amenities :amenities="data.amenities" />
        </section>

        <!-- Neighborhood -->
        <section id="neighborhood" class="section">
            <h2>Neighborhood & Location</h2>
            <div class="neighborhood-grid">
                <div class="text-content">
                    <p>{{ data.neighborhoodText }}</p>
                    <div class="map-container">
                        <iframe 
                            width="100%" 
                            height="300" 
                            frameborder="0" 
                            style="border:0" 
                            :src="data.googleMapsUrl" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>

        <!-- Photos -->
        <section id="photos" class="section">
            <Photos :photoUrls="data.photoUrls" />
        </section>

        <!-- Pets -->
        <section id="pets" class="section highlight-section">
            <div class="content-wrapper">
                <h2>Pet Policy</h2>
                <div class="pet-info">
                    <div class="pet-item">
                        <span class="icon">🐱</span>
                        <p><strong>Cat Friendly</strong><br>2 cats per bedroom max</p>
                    </div>
                    <div class="pet-item">
                        <span class="icon">💲</span>
                        <p><strong>$25/mo</strong><br>No pet deposit required</p>
                    </div>
                    <div class="pet-item">
                        <span class="icon">🐕‍🦺</span>
                        <p><strong>Service Animals</strong><br>Always welcome</p>
                    </div>
                </div>
                <p class="note">Note: No dogs allowed (except service animals).</p>
            </div>
        </section>

        <!-- Contact -->
        <section id="contact" class="section contact-section">
            <div class="card contact-card">
                <h2>Ready to Move In?</h2>
                <p class="contact-text">
                    We screen all residents to ensure safe and comfortable living arrangements for everyone.
                    There is a $60 background-check fee per tenant.
                </p>
                <div class="contact-actions">
                    <div class="phone-box">
                        <span class="label">Call Us Today</span>
                        <a href="tel:3203000606" class="phone-number">(320) 300-0606</a>
                    </div>
                    <a href="https://cozy.co/" target="_blank" class="pay-btn">Pay Rent Online</a>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; {{ new Date().getFullYear() }} Frontier Properties. All rights reserved.</p>
        </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { cityData } from '../data'
import Amenities from '../components/Amenities.vue'
import Photos from '../components/Photos.vue'

const props = defineProps(['city'])
const data = computed(() => cityData[props.city])
</script>

<style scoped>
.apartment-page {
    background-color: #f5f5f5;
}

/* Hero Section */
.hero {
    height: 70vh;
    background-size: cover;
    background-position: center;
    position: relative;
    color: white;
}

.hero-overlay {
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7));
    height: 100%;
    display: flex;
    align-items: center;
}

.hero-content {
    width: 100%;
}

.back-btn {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.5);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 2rem;
    transition: all 0.3s;
}

.back-btn:hover {
    background: rgba(255,255,255,0.1);
    border-color: white;
}

.hero h1 {
    font-size: 3.5rem;
    margin: 0;
    color: white;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.address {
    font-size: 1.5rem;
    opacity: 0.9;
    margin-bottom: 2rem;
}

.hero-actions {
    display: flex;
    gap: 1rem;
}

.cta-btn {
    background-color: var(--primary-color);
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: bold;
    transition: transform 0.2s;
}

.cta-btn:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
}

.secondary-btn {
    background-color: white;
    color: var(--text-color);
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: bold;
    transition: transform 0.2s;
}

.secondary-btn:hover {
    transform: translateY(-2px);
    background-color: #f0f0f0;
}

/* Sticky Nav */
.sticky-nav {
    position: sticky;
    top: 0;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 100;
    padding: 1rem 0;
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand {
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--primary-dark);
}

.links a {
    margin-left: 2rem;
    color: var(--text-color);
    font-weight: 500;
}

.links a:hover {
    color: var(--primary-color);
}

/* Sections */
.section {
    padding: 1rem 0;
}

.card {
    background: white;
    padding: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.lead {
    font-size: 1.2rem;
    color: #555;
}

/* Neighborhood */
.map-container {
    margin-top: 1rem;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
}

/* Pets */
.highlight-section {
    background-color: #e8f5e9;
    border-radius: var(--radius);
    padding: 1rem;
    margin: 1rem 0;
}

.pet-info {
    display: flex;
    justify-content: space-around;
    margin: 1rem 0;
    text-align: center;
}

.pet-item .icon {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 0.5rem;
}

/* Contact */
.contact-card {
    text-align: center;
    background: linear-gradient(to bottom right, #ffffff, #f0f7f0);
}

.contact-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
}

.phone-number {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-color);
    display: block;
}

.pay-btn {
    background-color: #333;
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: bold;
}

.pay-btn:hover {
    background-color: #000;
}

footer {
    background: #333;
    color: white;
    padding: 1rem 0;
    text-align: center;
    margin-top: 0;
}

@media (max-width: 768px) {
    .hero h1 { font-size: 2.5rem; }
    .nav-content { flex-direction: column; gap: 1rem; }
    .links a { margin: 0 0.5rem; }
    .pet-info { flex-direction: column; gap: 2rem; }
    .contact-actions { flex-direction: column; gap: 1.5rem; }
}
</style>
