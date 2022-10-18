>"사이트에 이미지를 넣는 방법은 두 가지가 있습니다. `<img>` 태그를 사용하는 것과 `<div>` 태그에 background-image 속성을 추가하는 것. 두 가지 방법의 차이점과 각각 어떠한 경우에 사용하면 좋은지 설명해보세요."


위 질문에 답하기 위해서는 **Semantic Web 과 Tags**에 대한 이해가 필요하다. 이번 포스팅에서는 두 개념을 설명하고 위 질문에 대한 답변을 기록해 보고자 한다. 

___

### 배경

웹사이트를 사용하는 이용자라면 검색엔진을 사용하지 않을 수 없다. 검색엔진을 통해 원하는 정보를 찾거나 다른 사이트로 접속할 수 있기 때문이다. 그렇기에 검색 엔진이 웹사이트 정보를 수집하는 방법인 **크롤링**에 집중해볼 필요가 있다. 

> 크롤링 : 검색엔진은 로봇(Robot)이라는 프로그램을 이용해 매일 전세계의 웹사이트 정보를 수집하고, 이를 검색엔진의 크롤러가 수행한다. 


위 기능을 원활하게 수행하기 위해서는 **웹사이트의 HTML 코드** 로 부터 정보를 수집하게 된다. 이를 잘 수행하기 위해서는 `semantic tags`로 구성된 `semantic web`이 필요하다. 


### Semantic Web
![https://ryullulalla.home.blog/2019/12/15/introduction-to-semantic-html/](https://velog.velcdn.com/images/seoya_lee/post/7e8a0492-6756-4c82-80a1-44edeaac4a96/image.jpg)


`의미론적 웹` 이라는 뜻으로, 컴퓨터가 이해할 수 있는 형태로 제작된 웹을 의미한다. 웹에 존재하는 수많은 웹페이지들에 메타데이터(Metadata)를 부여하여, 기존의 잡다한 데이터 집합이었던 웹페이지를 ‘의미’와 ‘관련성’을 가지는 거대한 데이터베이스로 구축하고자 하는 발상이다.


### Semantic Tags

의미론적 웹을 실현하기 위해서는 `Semantic Tags` 로 HTML 요소들이 구성되어 이었어야 한다.`Semantic Tags` 란 브라우저, 검색엔진, 개발자 모두에게 콘텐츠의 의미를 명확히 설명하는 역할을 한다. 태그를 통해 컴퓨터가 HTML 요소의 의미를 보다 명확히 해석하고 그 데이터를 활용할 수 있게 한다. 


```html
<div> Hello </div>
<h1> Hello </h1>
```

첫번째 코드인 `div` 태그를 사용한 예시를 보게되면, 태그 자체에 어떠한 설명도 하지 않기 때문에 어떤 의미도 가지고 있지 않는다. 

두번째 코드는 header(제목)을 의미하는 `h1`태그를 사용하고 있어 `semantic tags` 즉, 개발자가 의도한 요소의 의미가 명확히 드러낸다. 


#### HTML 요소 구분 (semantic vs non-semantic)

- **semantic** : 의미 설명
form, table, img 등이 있으며 이들 태그는 content의 의미를 명확히 설명

- **non-semantic** : 의미 설명, 포함 X
div, span 등이 있으며 이들 태그는 content에 대하여 어떤 설명도 하지 않는다.

___

### Back to the point❓

포스팅 제일 처음 질문에 답을 해보자면, 

semantic tag인 `<img>` 는 브라우저, 검색 엔진, 개발자 모두에게 콘텐츠가 이미지라고 명확하게 설명하는 역할을 하고 있다. 이는 코드의 가독성을 높이고 유지보수를 쉽게 할 수 있다는 장점이 있다. 또한 검색엔진에 노출되게 하기 위해서 크롤러가 이해할 수 있는 semantic tags로 구성하는 것이 도움이 될 수 있다. 

반면, `background-image`는 의미있는 태그가 아니기 때문에 애러 발생시 어떤 이미지에서 발생한 것인지, 유지보수가 어려워진다. 

**결론**

`<img>` 는 이미지 정보가 포함되고 검색엔진의 노출도가 중요할 경우에 사용하고 `background-image` 는 미적요소로 이미지를 보여주기 위한 경우 사용한다. 

___

**참고 자료**
1. https://dev.to/sarfaraz_stark/semantic-html-3la1
2. https://chanho-yoon.github.io/web/web-semanticWeb-semanticTag/
3. https://poiemaweb.com/html5-semantic-web




