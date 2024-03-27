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
      name: string;
      field: {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      };
      label?: string;
    }[];
    textarea?: {
      name: string;
      field: {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
      };
      label?: string;
    };
    tag?: {
      tags?: ITag[];
      setTags: React.Dispatch<React.SetStateAction<ITag[]>>;
    };
  };
}

export const Modal = ({ type, closeModal, body, confirm, cancel }: Props) => {
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
          {body.input &&
            body.input.map((item) => (
              <InputGroup>
                {item.label && <label htmlFor={item.name}>{item.label}</label>}
                <input
                  id={item.name}
                  name={item.name}
                  onChange={item.field.onChange}
                />
              </InputGroup>
            ))}
          {body.textarea && (
            <InputGroup>
              {body.textarea.label && (
                <label htmlFor={body.textarea.name}>
                  {body.textarea.label}
                </label>
              )}
              <textarea
                id={body.textarea.name}
                name={body.textarea.name}
                onChange={body.textarea.field.onChange}
              />
            </InputGroup>
          )}
          {body.tag && (
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
