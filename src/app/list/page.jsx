import Image from "next/image";

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((v, i) => {
        return (
          <div className="food">
            <img src={`/food${i}.png`} />
            <h4>{v} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
