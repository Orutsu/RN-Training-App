export const strongPassword = new RegExp(
  '^(?=.*[a-z]){3,}(?=.*[A-Z]){2,}(?=.*[0-9]){2,}(?=.*[!@#$%^&*()--__+.]){1,}.{6,}$'
)

export const emptyString = new RegExp('/s/')

export const isEmptyStr = (str: string) => {
  if (str === '' || /^ *$/.test(str)) {
    return true
  }
  return false
}

export const isEmailValid = (str: string) => {
  if (
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      str
    )
  ) {
    return true
  }
  return false
}
