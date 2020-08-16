<template>
  <div class="main-personage">
    <div class="personage">
      <div class="floor"></div>
      <div class="neck ha"></div>
      <div class="eye1 ha hb"></div>
      <div class="eye2 ha hb"></div>
      <div class="rightArm ha"></div>
      <div class="gunBase ha hb"></div>
      <div class="gunBarrel ha hb"></div>
      <div class="body1 ha"></div>
      <div class="body2 ha"></div>
      <div class="leftArm ha hb"></div>
      <div class="shots"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/index.scss';

.floor{
  background-color: var(--green-light);
  @include basic(7%, 55%, $b: 6%, $r: 14%);
  border-radius: 30px;
}
.eye1, .eye2{
  @include radius-50;
  &::before{
    @include radius-50;
    @include basic(70%, 70%, 14%, 14%);
    background-color: white;
  }
  &::after{
    @include radius-50;
    @include basic(22%, 22%, 40%, 50%);
    background-color: black;
  }
}

.neck{
  @include basic(22%, 16%, 41%, 28%);
  background-color: var(--green-dark-shadow);
  &::after{
    @include basic(92%, 65%, 0%, 18%);
    background-color: white;
  }
}
.eye1{
  @include basic(15%, 15%, 30%, 38%);
  background-color: var(--green-dark-shadow);
}
.eye2{
  @include basic(15%, 15%, 30%, 25%);
  background-color: var(--green-dark);
}

.body1, .body2, .gunBase{
  @include radius-50;
  &::after{
    border-radius: 30px;
    @include basic(50%, 120%, 50.5%, -49%);
  }
}

.rightArm{
  @include basic(10%, 23%, 58.5%, 42%);
  background-color: var(--green-dark);
  border-radius: 30px;
  &::after{
    @include radius-50;
    background-color: var(--green);
    @include basic(100%, 35%, 0%, 63%);
    z-index: 3;
  }
}
.leftArm{
  transform: rotate(45deg);
  @include basic(10%, 16%, 61.5%, 20%);
  background-color: var(--green-light);
  border-radius: 30px;
}

.gunBase{
  @include basic(18%, 18%, 42%, 51%);
  background-color: var(--green-dark-shadow);
  transform: rotate(90deg);
  &::before{
    @include basic(13%, 83%, 110%, 6%);
    background-color: tomato;
    border-radius: 30px;
  }
  &::after{
    background-color: var(--green-dark-shadow);
    @include basic(45%, 105%, 0%, -46%);
  }
}
.gunBarrel{
  @include basic(3%, 20%, 50%, $l:19%);
    background-color: var(--green-dark-shadow);
  &::before{
    @include radius-50;
    background-color: var(--green-dark-shadow);
    @include basic(170%, 25%, -30%, $l:-12%);
  }
  &::after{
    border-radius: 30px;
    transform: rotate(90deg);
    @include basic(80%, 60%, 5%, $l:-2%);
    background-color: tomato;
  }
}

.body1{
  @include basic(25%, 25%, 55%, 25%);
  background-color: var(--green-dark-shadow);
  animation: walk 1000ms ease-in-out 0ms 19;
  animation-fill-mode: forwards;
  &::after{
    background-color: var(--green-dark-shadow);
    // @include basic(50%, 120%, 50.5%, -49%);
  }
}

.body2{
  background-color: var(--green-dark);
  @include basic(25%, 25%, 55%, 25%);
  animation: walk2 1000ms ease-in-out 0ms 19;
  animation-fill-mode: forwards;
  &::after{
    background-color: var(--green-dark);
    @include basic(50%, 120%, 0%, -49%);
  }
}
@keyframes walk {
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(110deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
@keyframes walk2 {
  0%{
    transform: rotate(130deg);
  }
  50%{
    transform: rotate(20deg);
  }
  100%{
    transform: rotate(130deg);
  }
}

.shots{
  background-color: var(--green-dark);
  @include basic(3%, 14%, 50%, $l:18%);
  z-index: 1;
  border-radius: 30px;
  animation: shot 1000ms ease-out 0ms infinite;
}

@keyframes shot {
  0%{
    transform: translateX(-18%);
  }
  100%{
    transform: translateX(-350%);
  }
}
</style>
