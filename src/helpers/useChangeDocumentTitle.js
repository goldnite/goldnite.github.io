import { useEffect } from "react";

export const useChangeDocumentTitle = (pageTitle) => {
  useEffect(() => {
    document.title = `goldnite | Personal Portfolio - ${pageTitle}`;
  }, [pageTitle]);
};
