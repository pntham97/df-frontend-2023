import PropTypes from "prop-types";
import * as S from "./styled";

Modal.propTypes = {
  children: PropTypes.any,
  visible: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  onCancel: PropTypes.any,
  onClear: PropTypes.any,
  filter: PropTypes.any,
  titleButton: PropTypes.any,
  onOk: PropTypes.any,
  footer: PropTypes.any,
  set_filter: PropTypes.any,
  has_button: PropTypes.bool,
  border_radius: PropTypes.string,
  widthTitle: PropTypes.string,
  margin: PropTypes.string,
  fontWeight: PropTypes.string,
  paragraph: PropTypes.any,
};

function Modal({
  title,
  titleButton,
  children,
  className,
  width = "368px",
  filter,
  onCancel,
  onOk,
  onClear,
  has_button = true,
  border_radius,
  widthTitle,
  fontWeight,
  margin,
  paragraph,
  footer = null,
  ...rest
}) {
  return (
    <S.Modal
      title={title}
      width={width}
      className={className}
      open={filter}
      onCancel={onCancel}
      onOk={onOk}
      onClear={onClear}
      footer={footer}
      $borderRadius={border_radius}
      $widthTitle={widthTitle}
      $margin={margin}
      $fontWeight={fontWeight}
      paragraph
      centered
      {...rest}
    >
      {children}
      {has_button && (
        <S.Footer>
          <button className="button-add" onClick={onOk}>
            {/* TODO */}
            {titleButton || "THÊM"}
          </button>
          {paragraph && (
            <button className="button-no" onClick={onClear}>
              Hủy
            </button>
          )}
        </S.Footer>
      )}
    </S.Modal>
  );
}

export default Modal;
