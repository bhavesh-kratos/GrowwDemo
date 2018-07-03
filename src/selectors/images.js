import { createSelector } from 'reselect';

const getImagesPagesArray = state => state.images.data;


export const getFlattenedImageList = createSelector(
    [getImagesPagesArray],
    (imagesPagesArray) => {
        if (imagesPagesArray == []) {
            return null;
        }
        return imagesPagesArray.reduce((acc, imagePage) => {
            return [...acc, ...imagePage.data];
        }, []);
    });