<template>
  <div class="amenities-container">
    <h2>Amenities & Utilities</h2>
    <div class="intro-text">
        <p>{{ amenities.paragraphOne }}</p>
        <p>{{ amenities.paragraphTwo }}</p>
    </div>
    
    <div class="lists-wrapper">
        <div class="amenity-card">
            <div class="card-header">
                <h3>Apartment Features</h3>
            </div>
            <ul class="amenity-list">
                <li v-for="(item, index) in amenities.listOne" :key="index">
                    <span class="check">✓</span> {{ item.text }}
                </li>
            </ul>
        </div>

        <div class="amenity-card">
            <div class="card-header">
                <h3>Utilities Included</h3>
            </div>
            <ul class="amenity-list">
                <li v-for="(item, index) in amenities.listTwo" :key="index">
                    <span class="check">✓</span> {{ item.text }}
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['amenities'])
</script>

<style scoped>
.amenities-container {
    margin-bottom: 0.5rem;
}

.intro-text {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: var(--text-muted);
}

.lists-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}

.amenity-card {
    background: var(--bg-surface);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: transform 0.3s;
    border: 1px solid var(--border-color);
}

.amenity-card:hover {
    transform: translateY(-5px);
}

.card-header {
    background-color: var(--bg-surface-2);
    color: var(--primary-color);
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
}

.card-header h3 {
    margin: 0;
    color: var(--primary-color);
    font-size: 1.2rem;
}

.amenity-list {
    list-style: none;
    padding: 1rem;
    margin: 0;
}

.amenity-list li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    color: var(--text-main);
}

.check {
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 10px;
    font-size: 1.2rem;
}
</style>
