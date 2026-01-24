import post from './post'
import vaka from './vaka'

// 'schemaTypes' ismini dışa aktardığından emin ol
export const schemaTypes = [post, vaka]


export const schema = {
    types: schemaTypes,
}