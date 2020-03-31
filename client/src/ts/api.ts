import config from './config'

export const getMessage = async () => {
  const url = config.api + 'messages/'

  const response = await fetch(url, {
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  })

  return await response.json();
}