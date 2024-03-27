import { useInput } from "../../hooks/useInput";
import * as M from "./Modal.element";
import { MODAL_TEXT, ModalType } from "./ModalConstants";
import { Tag, TagBox, TagInput } from "../forms/SurveyForm.element";
import { ITag } from "../forms/SurveyForm";
import { KeyboardEvent } from "react";
import { CARD_COLORS } from "../../styles/palette";
import { InputGroup } from "../forms/SurveyForm.element";

interface Props {
  type: ModalType;
  closeModal: () => void;
  confirm: { title: string; onClick: () => void };
  cancel?: { title: string; onClick: () => void };
  body: {
    input?: {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }[];
    textarea?: {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    };
    tag?: {
      hasTag?: boolean;
      tags?: ITag[];
      setTags: React.Dispatch<React.SetStateAction<ITag[]>>;
    };
  };
}

export const Modalv2 = ({ type, closeModal, body, confirm, cancel }: Props) => {
  const modalType = MODAL_TEXT[type];
  //   const nickname = useInput();
  const handleTagAdd = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newTag = {
        value: (e.target as HTMLInputElement).value,
        color: CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)],
      };
      const tags = body.tag?.tags || [];
      body.tag?.setTags([...tags, newTag]);
      (e.target as HTMLInputElement).value = "";
    }
  };

  return (
    <>
      <M.ModalBackground
        onClick={() => {
          closeModal();
        }}
      />
      <M.ModalBlock>
        <M.ModalHeader>
          <h2>{modalType.title}</h2>
          <span>{modalType.subtitle}</span>
        </M.ModalHeader>
        <M.ModalBody>
          {/* <input
            onChange={nickname.handleChange}
            maxLength={10}
            minLength={4}
          /> */}
          {body.input &&
            body.input.map((field) => (
              <InputGroup>
                <label htmlFor={field.value}>설문지 이름을 입력하세요.</label>
                <input
                  id={field.value}
                  name={field.value}
                  onChange={field.onChange}
                />
              </InputGroup>
            ))}
          {body.textarea && (
            <InputGroup>
              <label htmlFor="content">설문지 내용을 입력하세요.</label>
              <textarea
                id="content"
                name="content"
                onChange={body.textarea.onChange}
              />
            </InputGroup>
          )}
          {body.tag?.hasTag && (
            <TagBox>
              {body.tag?.tags?.map((tag: ITag, idx: number) => (
                <Tag key={idx} color={tag.color}>
                  {"#" + tag.value}
                </Tag>
              ))}
              <TagInput onKeyDown={handleTagAdd} placeholder="#태그입력" />
            </TagBox>
          )}
        </M.ModalBody>
        <M.ModalFooter>
          {cancel && (
            <M.CancelButton onClick={cancel.onClick}>
              {cancel.title}
            </M.CancelButton>
          )}
          <M.CompleteButton
            onClick={confirm.onClick}
            // disabled={nickname.value.length < 4}
          >
            {confirm.title}
          </M.CompleteButton>
        </M.ModalFooter>
      </M.ModalBlock>
    </>
  );
};
