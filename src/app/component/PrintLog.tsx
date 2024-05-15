"use client";

import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

const Curtain = styled.div`
  position: absolute;
  top: -4rem;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
`;

const LogBox = styled.div`
  width: 300px;
  height: 100px;
  background-color: semiblack;
`;

const PrintLog = () => {
  const { data } = useQuery({
    queryKey: ["Log"],
    queryFn: async () => {
      return (await fetch(`http://122.47.121.165:8080/stream_logs`)).json();
    },
  });
  return (
    <div>
      <Curtain>
        <LogBox></LogBox>
      </Curtain>
    </div>
  );
};

export default PrintLog;
