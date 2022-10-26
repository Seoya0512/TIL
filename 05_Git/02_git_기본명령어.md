# Git 기본 명령어


# Git 명령어 (commit 순서)


### `git init` 
- git 저장소 생성 / 버전 관리를 위한 정보 생성 
- 특정 폴더를 git 저장소 (repository)를 만들어 git으로 관리
- .git 폴더가 생성됨 


### `git add` 
- 파일 수정 이력 기록 준비
- 수정한 파일의 이력을 남길 준비를 하는 명령어
- working directory상의 변경 내용을 staging area에 추가하기 위해 사용
- untracked, modified 상태의 파일을 staged 로 변경

  ```bash
  $ git add <file>
  $ git add .
  
  <file>에는 단일 파일, 복수 파일, 단일 폴더, 현재 디렉토리(.)등이 들어갈 수 있다
  ```

### `git commit`
- 파일 수정 이력 기록 
- 수정한 파일의 이력을 남기는 명령어
- staged 상태의 파일들을 커밋을 통해 버전으로 기록
- SHA-1 해시를 사용하셔 40자 길이의 체크섬을 생성하고, 이를 통해 고유한 커밋을 표기
- 커밋 메시지는 변경 사항을 나타낼 수 있도록 명확하게 작성

  ```bash
  $ git commit -m'<commit msg>'
  
  $ git commit <여러 줄>
  ```


### `git push`

- 원격 저장소 활용 명령어
- 원격 저장소로 로컬 저장소 변경 commit을 push 
- 저장소의 commit(버전)이 push

  ```bash
  $ git push <원격저장소이름><브랜치이름>
  ```


## Git 파일 확인 

### `git status`

- Git 저장소에 있는 파일의 상태를 확인하기 위한 명령어
  - 파일 상태 확인 
    - *untracked files, changes not staged for commit, chages to be commited*
    - commit 할 것이 없다: *Nothing to commit, working tree clean*

### `git log`

- commit 이력 확인 
- 현재 저장소에 기록된 커밋을 조회
- 다양한 옵션을 통해 로그 조회 가능 

  ```bash
  $ git log -1
  $ git log -oneline
  $ git log -2 --oneline
  ```
<br>

## Git 설정파일 (config)

### 1. 사용자 정보 (commit author) 

* **global user** : Github에서 설정한 사용자 정보 

  ```bash
  $ git config -global.user.name "username"
  
  $ git config -global.user.email"my@email.com
  ```

* 설정 확인

  * git config -l

  * git config -global -l

  * git config user.name

    
### 2. 설정 파일 

`—system`
  - /etc/gitconfig
  - 시스템의 모든 사용자와 모든 저장소에 적용 (관리자 권환)
  
`—global`
  - ~/.gitconfig
  - 현재 사용자에게 적용되는 설정
  
`—local`
  - .git/config
  - 특정 저장소에만 적용되는 설정

<br>

## 3. 원격저장소 활용 명령어

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
  <br>
## repository 클론하기 (clone)
GitHub repo를 먼저 생성한 뒤 clone을 받아 내 로컬환경에 다운로드 후 프로젝트를 시작 

## `git clone`

     - 원격 저장소를 복제하여 가져옴 
     - Git hub repo 에서 'Clone or download' 버튼을 누르고 복사 아이콘 클릭 
  
    ```bash
    git clone <github-repo-link>
    ```

## `git pull`
 git pull 명령어를 통해 remote 의 최신화된 코드를 내 로컬 repo 에 반영할 수 있습니다. 원격 저장소로 부터 변경된 내역을 받아와서 이력을 병합함

       ```bash
       $ git pull <원격저장소이름><브랜치이름>
       $ git pull origin master
       ```

## `git ignore`
  - 특정 확장자에 가능  (*.mp4)
  - 특정 폴더에 가능 
  - 특정 파일에 가능 


## github 에 잘못 올라간 폴더 및 파일 삭제하기 

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


### git hub 로 푸쉬하지 않은 "마지막"커밋 메시지를 다시 작성

```bash
$ git commit --amend -m 'Revise~~~'
```
