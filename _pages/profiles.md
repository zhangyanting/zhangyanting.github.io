---
layout: page
permalink: /members/
title: members
description: members of the lab 
nav: true
nav_order: 6
---
<style>
  .row {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    font-family: monospace;
  }
  .people-student {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
	.rounded-image {
	  border-radius: 50%;
	}
	.self-rounded-image {
	  border-radius: 10%;
	}
  .text-muted {
    color: #777;
    font-size: 12px;
  }
  .interest {
    font-size: 13px;
  }
  .member-des {
    /* margin-top: 10px; */
    
  }
  img {
    width: 100px;
    height: 100px;

    object-fit:cover;
  }
  h5 {
    font-size: 15px;
  }
</style>

<head>
	<script src="https://kit.fontawesome.com/5bef57b3e9.js" crossorigin="anonymous"></script>
</head>

<div>
<!-- phd student -->
  <br>
  <div class="row">
    <div class="people-student">
      <div class="member-img">
        <img class="img-fluid z-depth-1 rounded" src="../assets/img/members/wsh.jpeg" >
      </div>
      <div class="more-info member-des">
        <h5>Shuanghong Wang</h5>
        <h6 class="text-muted">2212534@mail.dhu.edu.cn</h6>
        <div class="interest">
          <span>Multi-object Tracking</span>
          <br>
          <span>Domain Adaptation</span>
        </div>
      </div>
    </div>
    <div class="people-student">
      <div class="member-img">
        <img class="img-fluid z-depth-1 rounded" src="../assets/img/members/ckw.jpg" >
      </div>
      <div class="more-info member-des">
        <h5>Kewei Chen</h5>
        <h6 class="text-muted">afoxxvi@outlook.com</h6>
        <div class="interest">
          <span>monocular 3D object detection</span>
          <br>
          <span>Java/kotlin development</span>
        </div>
      </div>
    </div>
    <div class="people-student">
      <img class="img-fluid z-depth-1 rounded" src="../assets/img/members/zhw.jpg" >
      <div class="more-info member-des">
        <h5>Huanwen Zheng</h5>
        <h6 class="text-muted">747247702@qq.com</h6>
        <div class="interest">
          <span>Generative models</span>
          <br>
          <span>Person re-identification</span>
        </div>
      </div>
    </div>
  </div>
</div>
