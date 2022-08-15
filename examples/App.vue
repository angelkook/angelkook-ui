<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloDemo />
    <m-card 
      imgSrc="1.jpeg"
      summary="学习A班的绘画技巧"
    />
    <br>
    <m-card
     imgSrc="2.jpeg"
     summary="学习B班的绘画技巧"
    >
    <template v-slot:footer>
      <div class="footer">
        <div class="level">中级 · 528人报名</div>
        <div class="price">¥299.00</div>
      </div>
    </template>
    </m-card>
    <br>
    <m-card
      imgSrc="3.jpeg"
      :width="370"
      :imgHeight="90"
    >
      本章节旨在通向其他绘画技巧的教学
      <template v-slot:footer>
        <div class="footer-other">4步骤 · 6门课 
          <div class="level"></div>
          <div class="level">1025500收藏</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199A1;
  margin-bottom: 8px;
}

.price {
  color: #F01414;
}

.footer-other {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
