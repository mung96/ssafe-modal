import React, { ChangeEvent } from "react";
import {
  ModalBlock,
  ModalBackground,
  ModalHeader,
  ModalFooter,
  ModalMain,
} from "./Modal.element";
import SurveyForm from "./SurveyForm";
import { useInput } from "../../hooks/useInput";
import { useState } from "react";
import uuid from "react-uuid";
import { ICard } from "../MySpace";

interface ISurveyModal {
  addCard: (card:ICard) => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SurveyModal: React.FC<ISurveyModal> = ({
  addCard,
  setIsModalOpen,
}) => {
  const clickOutside = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ModalBackground onClick={clickOutside}></ModalBackground>
      <ModalBlock>
        <ModalHeader>
          <h2>새로운 설문지를 작성합니다.</h2>
          <span>새로운 설문지를 작성하기 위한 설정입니다.</span>
        </ModalHeader>
        <ModalMain>
          <SurveyForm
            addCard={addCard}
            setIsModalOpen={setIsModalOpen}
          />
        </ModalMain>
      </ModalBlock>
    </>
  );
};


// export const SurveyModal: React.FC<ISurveyModal> = ({
//   addCard,
//   setIsModalOpen,
// }) => {
//   const [title, handleTitleChange] = useInput();
//   const [body, setBody] = useState("");
//   const [tags, setTags] = useState<string[]>([]);

//   const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     setBody(e.target.value);
//   };

//   const clickOutside = () => {
//     setIsModalOpen(false);
//   };

//   const handleCompleteBtn = (card:ICard) => {
//     // addCard(uuid(), title, body, tags, new Date());
//     addCard(card);
//     setIsModalOpen(false);
//   };
//   return (
//     <>
//       <ModalBackground onClick={clickOutside}></ModalBackground>
//       <ModalBlock>
//         <ModalHeader>
//           <h2>새로운 설문지를 작성합니다.</h2>
//           <span>새로운 설문지를 작성하기 위한 설정입니다.</span>
//         </ModalHeader>
//         <ModalMain>
//           <SurveyForm
//             handleTitleChange={handleTitleChange}
//             handleBodyChange={handleBodyChange}
//             tags={tags}
//             setTags={setTags}
//             addCard={addCard}
//           />
//         </ModalMain>
//         <ModalFooter>
//           <button onClick={()=>handleCompleteBtn()}>확인</button>
//         </ModalFooter>
//       </ModalBlock>
//     </>
//   );
// };
