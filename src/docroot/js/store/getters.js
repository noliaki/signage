export const videoMedias = state => {
  return state.userMedias.filter(media => media.kind === 'videoinput')
}
