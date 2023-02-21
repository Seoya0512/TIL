# Git 과 Github 

## Git 이란?
- 리누스 토발스가 개발
- Git은 **분산버전관리시스템(VCS: Version Control System)** 으로 코드의 버전을 관리하는 도구
- 컴퓨터 파일의 변경사항을 추적하고 여러명의 사용자들 간에 해당 파일들의 작업을 조율
- 시간이 지남에 따라 파링의 변경 사항을 추적하는 도구 

## 왜 코드도 버전 관리를 해야할까? 
1. 수정할 때 마다 파일을 새로 만들면 관리가 힘들기 때문
2. 언제든 이전 버전의 코드로 돌아갈 수 있음
3. 어떤 개바자가 코드를 작성했는지 확인할 수 있음 
4. 하나의 프로젝트를 두고 여러명의 개발자들이 협업할 수 있음 


### 분산버전관리시스템(DVCS)
- 중앙집중식버전관리시스템은 중앙에서 버전을 관리하고 파일을 받아서 사용
- 원격저장소(remote repository)를 통하여 협업하고, 모든 히스토리를 클라이언트들이 공유


## GitHub
- Git을 사용한 프로젝트들의 저장소
- 개발자들의 Social Network
- Git을 사용하는 프로젝트를 위한 호스팅 서비스 
- GitHub을 사용하여 로컬 프로젝트 repository를 원격 클라우드 기반 GitHub 저장소에 업로드 할 수 있고, public repository 들을 통해 다른 개발자들과 교류할 수 있음

___

### git 기본 흐름

1) **기본 flow**
   1) 작업(수정)한 파일 (working directory)
   2) **add** 하여 Staging area에 모아
   3) **commit**으로 버전 기록 (Head)

2. **Git 파일 관리**

   * modified : 파일이 수정된 상태 (add 명령어를 통하여 string area로)
   * staged : 수정한 파일을 곧 커밋할 것이라고 표시한 상태
   * commited : 커밋이 된 상태

3. **파일 라이프사이클**

   * **Tracked** : 이전부터 버전으로 관리되고 있는 파일

     * unmodified : git status 에 나타나지 않음
     * modified : *"Changes not staged for commit"*
     * Staged : *"Changes to be commiteted"*

   * **Untracked**  : 버전으로 관리된 적 없는 파일 

     

   ![lifecycle](md-images/lifecycle-8646841.png)

   ___


   