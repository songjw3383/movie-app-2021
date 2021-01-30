# Movie App 2021

React JS Foundamentals Course
starting 0129 ~

## 0129
### JSX & PROPS
* Component -> HTML 을 반환하는 함수 
* JSX 는 React의 유일한 개념
-> jsx는 자바스크립트안의 HTML (사용: < />)

* react application은 하나의 component만을 랜더링함
* component의 재사용성 
```
<Food fav="kimchi" />
```
> food 컴포넌트에 fav라는 이름의 속성을 김치라는 값으로 준 것이다.
```
<Food fav="kimchi" taste="good" price="cheap" />
```
> Food 함수인자에 모두 props로 전달된다.

* function(props) = function( { } )
> (props.fav) = ({fav})

* .map()
> map()은 function을 취해서 그 function을 만든 array의 각 item 에 모두 적용해준다.
```
Array friends = [a,b,c,d]
friends.map(current =>( { console.log(current); return 0 })
// 여기서 current는 단지 오브젝트일뿐, 큰 의미없음
[result]
[0,0,0,0]
```

* React에서는 각자의 고유의 키값이 필요

* Props Checking -> rating 추가
> .prop-types() 사용 : 전달받은 props가 내가 원하는 props인지를 확인해 주는 용도임
```
Food.propTypes = {
  name: PropTypes.string.isRequired
  // name은 string 형식으로 요구되며, 아닐시 오류가 뜸(undefined 될시 오류는 아님)
  }
```

### STATE
* state 는 동적인 데이터를 다룰때 필요
* class component 는 함수(function)이 아니기때문에 return 을 쓰지않고 render() 을 사용
```
class App extends React.Component
```
> React.Component 로부터 확장된 App 클래스
* Class Component Vs. Function Component
> Function component는 function이고 뭔가를 return, 그리고 screen에 표시됨.
> Class component는 class이고 react component로 부터 확장되어 screen에 표시됨.
