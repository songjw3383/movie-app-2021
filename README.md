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
> map()은 function을 취해서 그 function을 만든 array의 각 item 에 적용해준다.
```
Array friends = [a,b,c,d]
friends.map(function(current) { console.log(current); return 0 })
[result]
0,0,0,0
```
