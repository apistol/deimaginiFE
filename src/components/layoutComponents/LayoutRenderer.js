import React, { useContext } from "react";
import LayoutContext from "../../context/layoutsContext/layoutContext";
import Renderer from "../Renderer";

const LayoutRenderer = () => {

  const layoutsContext = useContext(LayoutContext);

  const {
    fields,

    name,
    categLayout,
    tipLayout,
    opening,

    layoutWidth,
    layoutHeight,

    hasText,
    editableText,
    editableBackground,

    returnedLayout,
    coverHasImage,
    coverImageWidth,
    coverImageHeight,
    coverImageTopPosition,
    coverImageLeftPosition,

    paddingBetweenImages,
    borderWidth,
    dropShadow,

    rowsLayout,
    layoutPadding,
    row1,
    row1Col1,
    row1Col2,
    row1Col3,
    row1Col4,
    row2,
    row2Col1,
    row2Col2,
    row2Col3,
    row2Col4,
    row3,
    row3Col1,
    row3Col2,
    row3Col3,
    row3Col4,
    row4,
    row4Col1,
    row4Col2,
    row4Col3,
    row4Col4,
    zoom,

    secondLayoutCoverHasImage,
    secondLayoutCoverImageWidth,
    secondLayoutCoverImageHeight,
    secondLayoutCoverImageTopPosition,
    secondLayoutCoverImageLeftPosition,
    secondLayoutPaddingBetweenImages,
    secondLayoutBorderWidth,
    secondLayoutDropShadow,

    secondLayoutRowsLayout,
    secondLayoutLayoutPadding,
    secondLayoutRow1,
    secondLayoutRow1Col1,
    secondLayoutRow1Col2,
    secondLayoutRow1Col3,
    secondLayoutRow1Col4,
    secondLayoutRow2,
    secondLayoutRow2Col1,
    secondLayoutRow2Col2,
    secondLayoutRow2Col3,
    secondLayoutRow2Col4,
    secondLayoutRow3,
    secondLayoutRow3Col1,
    secondLayoutRow3Col2,
    secondLayoutRow3Col3,
    secondLayoutRow3Col4,
    secondLayoutRow4,
    secondLayoutRow4Col1,
    secondLayoutRow4Col2,
    secondLayoutRow4Col3,
    secondLayoutRow4Col4,
    secondLayoutZoom,
  } = layoutsContext.propsForLayout;

  const {
    // Functions
    handleTextUpdate,
    handleChangeDropdown,
    handleChangeCheck,
    zoomOut,
    zoomIn,
    handleChangeSwitch,
  } = layoutsContext;


  return (
    <Renderer
      rendererWidth={1200}
      rendererHeight={500}
      fields={fields}
      name={name}
      categLayout={categLayout}
      tipLayout={tipLayout}
      opening={opening}
      layoutWidth={layoutWidth}
      layoutHeight={layoutHeight}
      hasText={hasText}
      editableTextd={editableText}
      editableBackground={editableBackground}
      returnedLayout={returnedLayout}
      coverHasImage={coverHasImage}
      coverImageWidth={coverImageWidth}
      coverImageHeight={coverImageHeight}
      coverImageTopPosition={coverImageTopPosition}
      coverImageLeftPosition={coverImageLeftPosition}
      paddingBetweenImages={paddingBetweenImages}
      borderWidth={borderWidth}
      dropShadow={dropShadow}
      rowsLayout={rowsLayout}
      layoutPadding={layoutPadding}
      row1={row1}
      row1Col1={row1Col1}
      row1Col2={row1Col2}
      row1Col3={row1Col3}
      row1Col4={row1Col4}
      row2={row2}
      row2Col1={row2Col1}
      row2Col2={row2Col2}
      row2Col3={row2Col3}
      row2Col4={row2Col4}
      row3={row3}
      row3Col1={row3Col1}
      row3Col2={row3Col2}
      row3Col3={row3Col3}
      row3Col4={row3Col4}
      row4={row4}
      row4Col1={row4Col1}
      row4Col2={row4Col2}
      row4Col3={row4Col3}
      row4Col4={row4Col4}
      zoom={zoom}
      secondLayoutCoverHasImage={secondLayoutCoverHasImage}
      secondLayoutCoverImageWidth={secondLayoutCoverImageWidth}
      secondLayoutCoverImageHeight={secondLayoutCoverImageHeight}
      secondLayoutCoverImageTopPosition={secondLayoutCoverImageTopPosition}
      secondLayoutCoverImageLeftPosition={secondLayoutCoverImageLeftPosition}
      secondLayoutPaddingBetweenImages={secondLayoutPaddingBetweenImages}
      secondLayoutBorderWidth={secondLayoutBorderWidth}
      secondLayoutDropShadow={secondLayoutDropShadow}
      secondLayoutRowsLayout={secondLayoutRowsLayout}
      secondLayoutLayoutPadding={secondLayoutLayoutPadding}
      secondLayoutRow1={secondLayoutRow1}
      secondLayoutRow1Col1={secondLayoutRow1Col1}
      secondLayoutRow1Col2={secondLayoutRow1Col2}
      secondLayoutRow1Col3={secondLayoutRow1Col3}
      secondLayoutRow1Col4={secondLayoutRow1Col4}
      secondLayoutRow2={secondLayoutRow2}
      secondLayoutRow2Col1={secondLayoutRow2Col1}
      secondLayoutRow2Col2={secondLayoutRow2Col2}
      secondLayoutRow2Col3={secondLayoutRow2Col3}
      secondLayoutRow2Col4={secondLayoutRow2Col4}
      secondLayoutRow3={secondLayoutRow3}
      secondLayoutRow3Col1={secondLayoutRow3Col1}
      secondLayoutRow3Col2={secondLayoutRow3Col2}
      secondLayoutRow3Col3={secondLayoutRow3Col3}
      secondLayoutRow3Col4={secondLayoutRow3Col4}
      secondLayoutRow4={secondLayoutRow4}
      secondLayoutRow4Col1={secondLayoutRow4Col1}
      secondLayoutRow4Col2={secondLayoutRow4Col2}
      secondLayoutRow4Col3={secondLayoutRow4Col3}
      secondLayoutRow4Col4={secondLayoutRow4Col4}
      secondLayoutZoom={secondLayoutZoom}


      handleTextUpdate={handleTextUpdate}
      handleChangeDropdown={handleChangeDropdown}
      handleChangeCheck={handleChangeCheck}
      zoomOut={zoomOut}
      zoomIn={zoomIn}
      handleChangeSwitch={handleChangeSwitch}
    />
  );
};

export default LayoutRenderer;
