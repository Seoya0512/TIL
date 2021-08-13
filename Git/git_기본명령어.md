# Git 기본 명령어

___

###  1. Git 명령어 (commit 순서)

___

#### 1.  git init

* 특정 폴더를 git 저장소 (repository)를 만들어 git으로 관리
  * .git 폴더가 생성됨 



#### 2. git add 

*  working directory상의 변경 내용을 staging area에 추가하기 위해 사용

  * untracked, modified 상태의 파일을 staged 로 변경

  ```bash
  $ git add <file>
  
  <file>에는 단일 파일, 복수 파일, 단일 폴더, 현재 디렉토리(.)등이 들어갈 수 있다
  ```



#### 3-1.  git commit

* staged 상태의 파일들을 커밋을 통해 버전으로 기록

* SHA-1 해시를 사용하셔 40자 길이의 체크섬을 생성하고, 이를 통해 고유한 커밋을 표기

* 커밋 메시지는 변경 사항을 나타낼 수 있도록 명확하게 작성

  ```bash
  $ git commit -m'<commit msg>'
  ```



#### 3-2 . git commit 

* Git은 데이터를 파일 시스템의 *스냅샷*  으로 관리하고 매우 크기가 작음
* 파일이 달라지지 않으면 성능을 위해 파일을 새로 저장하지 않음

#### 4. git push 

* 원격 저장소 활용 명령어

* 원격 저장소로 로컬 저장소 변경 commit을 push 

* 저장소의 commit(버전)이 push

  ```bash
  $ git push <원격저장소이름><브랜치이름>
  ```

   

### 2. Git 파일 확인 

___

#### 1. git status

* Git 저장소에 있는 파일의 상태를 확인하기 위해 활용
  * 파일 상태 확인 (*untracked files, changes not staged for commit, chages to be commited*)
  * commit 할 것이 없다  = *Nothing to commit, working tree clean*

#### 2. git log

* 현재 저장소에 기록된 커밋을 조회

* 다양한 옵션을 통해 로그 조회 가능 

  ```bash
  $ git log -1
  $ git log -oneline
  $ git log -2 --oneline
  ```

  



### 3. Git 설정파일 (config)

___

#### 1. 사용자 정보 (commit author) 

* **global user** : Github에서 설정한 사용자 정보 

  ```bash
  $ git config -global.user.name "username"
  
  $ git config -global.user.email"my@email.com
  ```

* 설정 확인

  * git config -l

  * git config -global -l

  * git config user.name

    

#### 2. 설정 파일 

* —system
  * /etc/gitconfig
  * 시스템의 모든 사용자와 모든 저장소에 적용 (관리자 권환)
*  —global
  * ~/.gitconfig
  * 현재 사용자에게 적용되는 설정
* —local
  * .git/config
  * 특정 저장소에만 적용되는 설정



### 4. 원격저장소 활용 명령어

___

* remote 확인 

  ```bash
  $ git remote -v
  ```

* remote 추가

  ```bash
  $ git remote add<이름><url>
  ```

* remote 삭제

  ```bash
  $ git remote rm<이름>
  ```

* remote url 변경

  ```bash
  $ git remote set-url<이름><url>
  ```

* remote 이름 변경

  ```bash
  $ git remote rename<이름><새이름>
  ```

  ___

  1. **git clone**

     - 원격 저장소를 복제하여 가져옴 

  2. **git pull**

     - 원격 저장소로 부터 변경된 내역을 받아와서 이력을 병합함

       ```bash
       $ git pull <원격저장소이름><브랜치이름>
       ```

  3. **git ignore**
     * 특정 확장자에 가능  (*.mp4)
     * 특정 폴더에 가능 
     * 특정 파일에 가능 



### github 에 잘못 올라간 폴더 및 파일 삭제하기 

```bash
# 폴더 삭제하기 

$ git rm --cached -r 폴더명 
$ git commit -m 'remove folder'
$ git push -u origin master
```

```bash
# 파일 삭제하기

$ git rm --cached -r 파일명 	# 방법 1
$ git rm --cahced 파일명			# 방법 2
$ git commit -m 'remove file'
$ git push -u origin master

```

