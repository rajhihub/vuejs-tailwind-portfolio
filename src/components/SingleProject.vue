<template>
  <Navbar />

  <div class="page-section pt-5" style="margin-top: 100px">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ul class="breadcrumb p-0 mb-0 bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/projects">All Projects</router-link>
          </li>
          <li class="breadcrumb-item active">Projects</li>
        </ul>
      </nav>

      <div class="row">
        <div class="col-lg-8">
          <div class="blog-single-wrap">
            <div class="header">
              <div class="post-thumb">
                <img :src="project[3].image" alt="" />
              </div>
              <div class="meta-header"></div>
            </div>
            <h1 class="post-title">{{ project[3].name }}</h1>
            <br />

            <div class="post-meta">
              <div class="post-date">
                <span class="icon" style="margin-right: 10px">
                  <span class="mai-time-outline"></span>
                </span>
                <a>{{ project[3].content }}</a>
              </div>
            </div>

            <div class="post-content">
              <p style="font-size: 20px">
                이더리움은 비트코인을 참조하여 설계된 블록체인 기반 플랫폼이기
                때문에 기본적인 매커니즘은 비트코인과 많이 비슷합니다. 하지만
                이더리움을 2세대 블록체인으로 거듭나게 한 차이점들이 존재합니다.
                가장 큰 차이점은 스마트 계약 ( " 스마트 컨트랙트") 기능의
                유무입니다. NFT는 구축된 표준에 따라 다양한 형태로 나타날 수
                있습니다.이더리움 네트워크 상에서 NFT를 구현하는 기술 중
                대표적인 것이 ERC721 이라는 이더리움 표준안입니다. 대표적으로
                이더리움 블록체인에서 ERC721 스마트 컨트랙트를 사용하지만 발행
                비용이 다른 체인보다 수수료 많이 나가는 편입니다.<br /><br />

                ERC721 이란? - ERC (Ethereum Request for Comment)는 이더리움
                블록체인 네트워크에서 발행되는 토큰 (Token, 메인 블록체인 내의
                기본적인 규약을 지키면서 종속되어 돌아가는 디지털자산을 지칭)의
                표준을 뜻합니다. ERC721은 ‘대체불가능한’ 특징을 지니고 있는
                이더리움상의 NFT의 표준안입니다. ERC721은 특정 생태계에서 거래
                등에 사용되는 토큰이 아니며, 게임 등 특적 목적으로 주로
                쓰입니다. <br /><br />

                스마트 컨트랙트, 왜 필요한가요? 그렇다면 도대체 스마트
                컨트랙트가 왜 필요한 것인지에 대해 알아보기 전에, 우선 스마트
                컨트랙트의 특장점에 대해 정리해보도록 하겠습니다. 기술적인
                관점에서 스마트 컨트랙트는 아래와 같은 대표적인 특징을 가지고
                있습니다. 1) 누구나 컨트랙트를 배포할 수 있습니다. 2) 컨트랙트의
                소유자가 아니더라도 누구든지 검증할 수 있습니다. 3) 코드의
                실행을 자동화할 수 있습니다. 4) 위변조가 어렵습니다.<br /><br />

                대표적으로 이더리움 체인에서 NFT 발행하고 싶을 때 스마트
                컨트랙트 발행이나 민팅 수수료가 생각보가 비싸게 나옵니다 측,
                이더리움 기반 10개 NFT를 민팅하는데 5$ 가까이 수수료 나오는데
                1000개, 1만개 NFT를 발행한다면 민팅만 하는데 몇백만원 비용이
                발생합니다. 이번에 소개해드릴 서비스는 신규 스마트 컨트랙트는
                컬랙션 총 민팅 수량의 많을 경우 이 스마트 컨트랙트를 사용하면
                블록높의에 따로 일반 컨트랙트보다 아주저렴하게 발행 가능합니다.
                다음에 일반 ERC721 컨트랙트와 신규 스마트 컨트랙트 발행 비용을
                비교해보겠습니다.<br /><br />
              </p>

              <blockquote class="quote">
                신규 스마트 컨트랙트 들어갈 중요한 기능들 <br /><br />

                - totalSupply() : 총 민팅된 상품 수량 <br />
                - mint() : 주인 지갑으로 에어드랍 <br />
                - mintforAddress(): 원하는 지갑으로 원하는 수량에 민팅 기능<br />
                - walletOfOwner() : 지갑 보유 상품 확인 <br />
                - tokenURI() : 메타데이터 확인<br />
                - setDefaultRoyalties() : 기본 로열티 관리 <br />
                - setRevealed() : 리빌 기능 <br />
                - setMaxSupply(): 최대 발행 수량 수정 <br />
                - setUriPrefix(): 메타데이터 주소 관리 <br />
                - setPaused() : 스마트 컨트랙트 상태 확인 <br />
                - withdraw() : 주인 지갑으로 출금<br />
                - _mintLoop(): 안전한 민팅 제공 <br />
                - _baseURI() : 메타데이터 주소 초회<br />
                <br />
              </blockquote>
              <br />

              <p style="font-size: 20px">
                일반 ERC721 vs 신규 스마트 컨트랙트 개발 비용 비교<br />
                <br />
                1. 스마트 컨트랙트 발행 <br />
                - 일반 ERC721 스마트 컨트랙트는 민팅 수량과 상관 없이 80 - 90$
                <br />
                - 신규 스마트 컨트랙트를 발행시 35~40$ 가까이 일반 스마트
                컨트랙트보다 거의 2배저렴한 비용이 발생합니다. <br />
                <br />
                2. 민팅 비용 민팅은 블록체인 자산을 생성하는 과정을 위한
                작업으로 서로 다른 암호화폐가 상대편 체인에 생성되고 교환되는
                것을 의미하며, 마인팅 이라고도 하며, 코인을 주조하는 행위를
                뜻합니다.NFT에도 결국은 블록체인, 암호화폐의 연장선이므로 해당
                용어가 쓰이는데,한 마디로 말해 NFT 자산을 '구매'한다 또는
                '소유'한다는 개념 정도로 이해하면 되겠습니다. 이어서 민팅
                비용까지 비교해보겠습니다. <br />
                <br />
              </p>

              <blockquote class="quote">
                - 일반 ERC721 스마트 컨트랙트를 사용해 민팅 비용은<br /><br />
                * 10개 민팅시 4-5$ ,<br />
                * 25개 민팅시 7-8$, <br />
                * 50개 민팅을 시도하면 거의 16-17$ 비용이 나오고요 <br />
                * 50개씩 1000개 작품들 민팅하려면 거의 310$ ~ 330$ 가까이 비용이
                발생합니다.<br />
                <br />
                - 이어서 신규 스마트 컨트랙트를 사용하면 민팅 비용이
                큰차이납니다 <br /><br />

                * 10개 민팅시 1.9-2.1$ ,<br />
                * 25개 민팅시 2.9-3.8$, <br />
                * 75개 민팅을 시도하면 거의 5.8-6.9$ 비용이 나오는데 <br />
                * 200개씩 1000개 작품들 민팅하려면 69$ ~ 70$ 가까이 비용이
                발생합니다.<br />
                </blockquote>
                <p style="font-size: 20px">
                <br />
                민팅 수량의 5000개나 1만개 대형 컬랙션을 작품들 주인 지갑으로
                민팅하거나 퍼블릭 민팅을 진행할때 신규 스마트 컨트랙트를
                사용하는 것을 추천드립니다. 주인 지갑으로 에어드랍 뿐만 아니라
                퍼블릭 민팅을 진행하는 경우도 직접 사용자가 민팅하기때문에
                사용자가 누구보다 저렴하게 민팅 가능해서 프로젝트에 대한 만족도
                높을거라고 생각합니다.<br />
                <br />
                </p>
             
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="widget">
            <!-- Widget search -->
            <div class="widget-box">
              <form action="#" class="search-widget">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter keyword.."
                />
                <button type="submit" class="btn btn-primary btn-block">
                  Search
                </button>
              </form>
            </div>

            <!-- Widget Categories -->
            <div class="widget-box">
              <h4 class="widget-title">Tech</h4>
              <div class="divider"></div>

              <ul class="categories">
                <img :src="project[0].tech1" />
                <img :src="project[0].tech2" />
                <img :src="project[0].tech3" /><br />
                <img :src="project[1].tech3" />
                <img :src="project[1].tech2" />
                <img :src="project[2].tech3" />

                <li><a>FrontEnd</a></li>
                <li><a>Web Application</a></li>
                <!-- <li><a href="#">Healthy</a></li>
                  <li><a href="#">Sports</a></li>
                  <li><a href="#">Entertainment</a></li> -->
              </ul>
            </div>

            <!-- Widget recent post -->
            <div class="widget-box">
              <h4 class="widget-title">Next Projects</h4>
              <div class="divider"></div>

              <div v-for="(a, i) in 3" :key="a" class="blog-item">
                <a class="post-thumb" href="">
                  <img :src="project[a].image" alt="" />
                </a>
                <div class="content">
                  <h6 class="post-title">
                    <a>{{ project[a].name }}</a>
                  </h6>
                  <div class="meta">
                    <a href="#"
                      ><span class="mai-calendar"></span
                      >{{ project[a].content }}</a
                    >
                    <!-- <a href="#"><span class="mai-person"></span> Admin</a>
                        <a href="#"><span class="mai-chatbubbles"></span> 19</a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import ProjectData from '../data/projects.js'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'


export default {
  name: 'Single Project Page',
  data () {
    return {
      project: ProjectData
    }
  },
  props: {
    blog: Array
  },
  components: {
    Navbar,
    Footer,
    
  }
}
</script>

<style></style>
