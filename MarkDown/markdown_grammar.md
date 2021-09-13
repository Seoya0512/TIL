# 마크다운 문법 정리 (기본)

Markdown은 텍스트 기반의 마크업 언어이며 HTML로 변환이 가능하다. 

웨엡서도 쉽고 간단하게 컨텐츠를 작성할 수 있다.



### Heading

* #의 개수에 따라 대응되는 수준 (Heading level)이 있으며, h1~6까지 표현가능

  > # Heading1
  >
  > ## Heading2
  >
  > ### Heading 3
  >
  > #### Heading 4
  >
  > ##### Heading 5
  >
  > ###### Heading6

* 문서의 구조를 위해 작성됨, 오직 문서의 '제목, 소제목'으로 사용 



### BlockQuote 

* `>`  블럭 인용문자를 이용한다

  > 1st
  >
  > > 2nd
  > >
  > > > 3rd



### List (목록)

* *순서가 있는 리스트 (ol)* 과 *순서가 없는 리스트 (ul)*로 구성

  |         ordered list         |    unordered list    |
  | :--------------------------: | :------------------: |
  | 1. First itmes (숫자로 표현) | `*, +, -` First item |

  

### Fenced Code block

* 코드 블록은 backtick 기호 3개를 활용하여 작성(```)

* 특정 언어를 명시하면 **Syntax Highlighting**

*  적용 가능 

  `python`

  ```python
  if i in range(10):
    print(i)
  ```

  

### Inline Code blcok

* 코드 블록은 backtick 기호 3개를 활용하여 작성(``)

* 예) In general, I will use `python`

  

### Link

```
[문자열](url)을 통해 링크를 작성 가능 
```

예시) [github](https://github.com/)



### 이미지

* `![문자열](주소, 확장자명)`을 통해 이미지를 사용 가능 

  ![dog](md-images/dog-8586503.jpeg)
  
  

### Blockquotes(인용문)

* '>'를 통해 인용문을 작성

  >  In the beginning God created the heavens and the earth.



### 수평선

* 3개 이상의 asterisks(***), dashes(---), or underscores(___)

  ```
  ***
  ---
  ____
  ```





### 마크다운 관련 자료

* [GitHub Flavored Markdown](https://github.github.com/gfm/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

* [Markdown Guide](https://www.markdownguide.org/)

  
