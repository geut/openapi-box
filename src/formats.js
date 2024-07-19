import { FormatRegistry } from '@sinclair/typebox'

// -------------------------------------------------------------------------------------------
// Format Registration
// -------------------------------------------------------------------------------------------
FormatRegistry.Set('date-time', value => IsDateTime(value, true))
FormatRegistry.Set('date', value => IsDate(value))
FormatRegistry.Set('time', value => IsTime(value))
FormatRegistry.Set('email', value => IsEmail(value))
FormatRegistry.Set('uuid', value => IsUuid(value))
FormatRegistry.Set('url', value => IsUrl(value))

// -------------------------------------------------------------------------------------------
// https://github.com/ajv-validator/ajv-formats/blob/master/src/formats.ts
// -------------------------------------------------------------------------------------------

const UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i
const DATE_TIME_SEPARATOR = /t|\s/i
const TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i
const DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/
const DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const URL = /^(?:https?|wss?|ftp):\/\/(?:\S+@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[01])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4])|(?:[a-z0-9\u{00A1}-\u{FFFF}]+-)*[a-z0-9\u{00A1}-\u{FFFF}]+(?:\.(?:[a-z0-9\u{00A1}-\u{FFFF}]+-)*[a-z0-9\u{00A1}-\u{FFFF}]+)*\.[a-z\u{00A1}-\u{FFFF}]{2,})(?::\d{2,5})?(?:\/\S*)?$/iu
const EMAIL = /^[\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
function IsLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}
function IsDate(str) {
  const matches = DATE.exec(str)
  if (!matches) return false
  const year = +matches[1]
  const month = +matches[2]
  const day = +matches[3]
  return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && IsLeapYear(year) ? 29 : DAYS[month])
}
function IsTime(str, strictTimeZone) {
  const matches = TIME.exec(str)
  if (!matches) return false
  const hr = +matches[1]
  const min = +matches[2]
  const sec = +matches[3]
  const tz = matches[4]
  const tzSign = matches[5] === '-' ? -1 : 1
  const tzH = +(matches[6] || 0)
  const tzM = +(matches[7] || 0)
  if (tzH > 23 || tzM > 59 || (strictTimeZone && !tz)) return false
  if (hr <= 23 && min <= 59 && sec < 60) return true
  const utcMin = min - tzM * tzSign
  const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0)
  return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61
}
function IsDateTime(value, strictTimeZone) {
  const dateTime = value.split(DATE_TIME_SEPARATOR)
  return dateTime.length === 2 && IsDate(dateTime[0]) && IsTime(dateTime[1], strictTimeZone)
}
function IsEmail(value) {
  return EMAIL.test(value)
}
function IsUuid(value) {
  return UUID.test(value)
}
function IsUrl(value) {
  return URL.test(value)
}
