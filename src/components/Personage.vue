<template>
  <div class="main-personage">
    <div class="personage">
      <div class="body ha hb"></div>
      <div class="fire ha"></div>
      <div class="rocket hb ha"></div>
      <div class="leftArm ha hb"></div>
      <div class="head ha hb"></div>
      <div class="band ha hb"></div>
      <div class="hair ha"></div>
      <div class="rightArm ha"></div>
      <div class="ear ha"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/index.scss';

.personage{
  transform: rotate(-45deg);
}

.rocket{
  width: 29%;
  height: 16%;
  background-color: silver;
  box-shadow: inset 1px 0px 14px 4px silver, inset -10px 10px 15px 5px white;
  top: 33%;
  right: 34%;
  border-radius: 5px 10px 10px 5px ;
  border-top-right-radius: 2em 2em;
  &::before{
   width: 10%;
    height: 90%;
    background-color: darkslateblue;
    left: -8px;
    border-radius: 5px 0 0 5px;
    top: 7%;
  }
  &::after{
    background-color: var(--pink);
    width: 25%;
    height: 110%;
    left: 20%;
    top: -6%;
  }
}

.fire{
  background-color: yellow;
  width: 26%;
  height: 11%;
  right: 66%;
  border-radius: 30px;
  top: 36%;
  animation-duration: 300ms;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.79, 0.11, 0.58, 1);
  animation-name:fireYellow;
  &::after{
    animation-name:fireOrange;
    animation-duration: 300ms;
    animation-delay: 50ms;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.79, 0.11, 0.58, 1);
    background-color: orange;
    width: 53%;
    height: 40%;
    right: 10%;
    border-radius: 30px;
    top: 31%;
  }
}

.body {
  @include basic(10%, 30%, 50%, $l: 23%);
  background-color: var(--green-dark);
  border-radius: 17px;
  box-shadow: 1px -12px white;
  &::before{
    background-color: var(--green-dark-shadow);
    z-index: -1;
    border-radius: 10px;
    @include basic(160%, 60%, -2%, 10%);
    transform: rotate(45deg)
  }
  &::after {
    @include basic(160%, 60%, -18%, -45.5%);
    background: var(--pink);
    border-radius: 5px 1em 1em 5px;
  }
}

.leftArm, .rightArm{
  @include basic(9%, 23%, 53.5%, 15%);
  background-color: var(--green-dark);
  border-radius: 30px;
  &::after{
    @include radius-50;
    @include basic(110%, 45%, -3%);
    background-color: rgb(226, 172, 125);
  }
}
.leftArm{
  top: 52%;
  &::after{
    right: -15%;
  }
}
.rightArm{
  @include shadow;
  right: 24%;
  &::after{
    right: -9%;
    background-color: peachpuff;
  }
}
.head{
  background-color: peachpuff;
  @include basic(20%, 20%, 40%, 22% );
  @include radius-50;
  @include shadow(-8px, -4px, 20px);
}

.band{
  background-color: var(--green);
  @include basic(7%, 20%, 44% ,22% );
  border-top-right-radius: 10px 20px;
  &::after, &::before{
    @include radius-50;
    @include basic(25%, 10%, $t: 45% );
    background-color: black;
  }
  &::after{
    right: 7px;
  }
  &::before{
    left: 28px;
  }
}

.hair{
  background-color: var(--green-dark);
  @include basic(7%, 20%, $t: 37%, $r: 22% );
  border-top-left-radius: 10px 20px;
  &::after{
    @include basic(115%, 100%, $t: -5%, $r: -19% );
    background-color: var(--green-dark);
    border-radius: 30px;
  }
}

.ear{
  background-color: peachpuff;
  @include basic(5%, 5%, $r: 38%, $t: 48% );
  @include radius-50;
  &::after{
    background-color: rgb(180, 147, 119);
    @include radius-50;
    @include basic(50%, 50%, $r: 28%, $t: 34% );
  }
}

@keyframes fireOrange {
  0%{
    width: 53%;
  }
  100%{
    width: 70%;
  }
}
@keyframes fireYellow {
  0%{
    width: 26%;
  }
  100%{
    width: 34%;
  }
}
</style>
