import { createSelector } from 'reselect';

const getImagesPagesArray = state => state.images.data;


export const getFlattenedImageList = createSelector(
    [getImagesPagesArray],
    (imagesPagesArray) => {
        if (typeof imagesPagesArray !== 'undefined' && imagesPagesArray.length > 0) {
            return imagesPagesArray.reduce((acc, imagePage) => {
                return [...acc, ...imagePage.data];
            }, []);
        }
        return null;
    });