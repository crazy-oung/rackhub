import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";
import styled from "styled-components";

import { PrimaryColor } from "../../../static/Shared/commonStyles";
const EditorInput = () => {
  const styles = {
    width: "100%",
    borderRadius: "8px",
    height: "min-content",
    minHeight: "315px",
    border: "solid 1px #eee",
    marginBottom: "15px",
  };

  return (
    <div className="CKEditorBox" style={styles}>
      <CKEditor
        editor={BalloonEditor}
        data="<ul><li>- 메모 페이지</li><li>- 프로필 페이지</li><li>- 강의 페이지</li><li>- 할일 페이지</li><li>- 수강현황 페이지</li></ul>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);

          editor.editing.view.change((writer) => {
            writer.setStyle(
              "min-height",
              "315px",
              editor.editing.view.document.getRoot()
            );
          });
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default EditorInput;
