## Description

Nestjs, TypeORM, GraphQL 그리고 PostgreSQL을 사용하여

- 설문지 객관식 문항 데이터베이스 설계
- CRUD 기능을 실현 시킨 서버입니다.

## Installation

$ npm install

````

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
````

## 사용법(test)

1. **서버 시작**:

   - 서버를 실행합니다:

     ```bash
     npm run start
     ```

   서버는 기본적으로 `http://localhost:4000`에서 시작됩니다.

2. **GraphQL Playground**:

   - 웹 브라우저에서 `http://localhost:4000/graphql`로 이동합니다.
   - GraphQL Playground를 사용하여 API와 상호 작용합니다:
     - 쿼리, 뮤테이션 및 서브스크립션 작성합니다.
     - 사용 가능한 스키마, 타입 및 작업을 탐색합니다.
     - API 엔드포인트를 테스트하고 CRUD 작업을 수행합니다.

3. **엔티티**:

   - `src/Entity`의 엔티티 파일을 살펴보고 데이터베이스 구조를 이해합니다.
   - 각 엔티티는 데이터베이스의 테이블을 나타내며 정의된 관계를 갖고 있습니다.

4. **CRUD 작업**:

   - `src/module`의 서비스 및 리졸버를 수정하여 엔티티의 CRUD 작업을 처리합니다.
   - GraphQL Playground를 사용하여 쿼리/뮤테이션을 작성하고 실행하여 이러한 작업을 테스트합니다.

5. **테스트**:
   - GraphQL Playground를 사용하여 다양한 시나리오와 입력 데이터를 시뮬레이션하고 경계 사례를 테스트합니다.
   - 응답, 오류 처리 및 API 엔드포인트의 동작을 확인합니다.

```

```
