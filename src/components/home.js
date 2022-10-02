import React from "react";
import { Image } from "antd";

function Home() {
  return (
    <div className="HeaderHome">
      <div className="home">
        <h1>Изучаем React</h1>
        <Image
          width={800}
          height={600}
          src="error"
          fallback="https://redev.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6166a7c6-3579-4225-ab1b-90cda615eb1a%2FUntitled.jpeg?table=block&id=83ed513a-17b3-4a6b-b065-166d8fb482af&spaceId=6661104d-9510-4a9e-8688-ef35a5d42a1d&width=2000&userId=&cache=v2"
        />
      </div>
    </div>
  );
}

export { Home };
