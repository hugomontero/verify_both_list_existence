const {
 isElementIncluded: hasBeenExecutedAndFailed,
} = require("../src/util/array_validations")

describe("testing has been executed and failed", () => {
 it("should throws when we receive non array variables", () => {
  const executedProcesses = []
  const failedProcesses = {}
  expect(() => {
   hasBeenExecutedAndFailed(executedProcesses, failedProcesses)
  }).toThrow()
 })

 it("should returns false when both arrays (executed and failed) are empty", () => {
  const executedProcesses = []
  const failedProcesses = []
  expect(hasBeenExecutedAndFailed(executedProcesses, failedProcesses)).toBe(false)
 })

 it("should returns false when both arrays are differents", () => {
  const executedProcesses = ["propertyType", "homeCondition"]
  const failedProcesses = ["yearBuilt", "propertyLocation"]

  expect(hasBeenExecutedAndFailed(executedProcesses, failedProcesses)).toBe(false)
 })

 it("should returns true when we have one element repeated in both arrays", () => {
  const executedProcesses = ["propertyType", "homeCondition", "propertyLocation"]
  const failedProcesses = ["yearBuilt", "propertyLocation"]
  expect(hasBeenExecutedAndFailed(executedProcesses, failedProcesses)).toBe(true)
 })

 it("should returns true when we have more than one element in both arrays", () => {
  const executedProcesses = ["propertyType", "homeCondition", "propertyLocation", "yearBuilt"]
  const failedProcesses = ["propertyLocation", "homeCondition", "propertyType"]
  expect(hasBeenExecutedAndFailed(executedProcesses, failedProcesses)).toBe(true)
 })

 it("should returns false when we have different words, in each list, (performance test)", () => {
  const executedProcesses = [
   "tumble",
   "roll",
   "boil",
   "suggestion",
   "program",
   "stitch",
   "start",
   "guarantee",
   "x-ray",
   "slave",
   "steady",
   "learned",
   "painful",
   "rain",
   "chase",
   "thankful",
   "loutish",
   "chalk",
   "attractive",
   "lucky",
   "improve",
   "screeching",
   "alleged",
   "new",
   "spoil",
   "tick",
   "holiday",
   "glue",
   "concerned",
   "jam",
   "perpetual",
   "jar",
   "rescue",
   "government",
   "snail",
   "threatening",
   "country",
   "calculator",
   "bitter",
   "successful",
   "symptomatic",
   "teeth",
   "obedient",
   "guiltless",
   "parcel",
   "suspect",
   "avoid",
   "challenge",
   "enchanted",
   "fit",
   "ritzy",
   "design",
   "hilarious",
   "smoke",
   "aloof",
   "animated",
  ]
  const failedProcesses = [
   "abounding",
   "son",
   "ancient",
   "electric",
   "chess",
   "observant",
   "sulky",
   "unhealthy",
   "achiever",
   "tall",
   "drop",
   "waste",
   "ugliest",
   "live",
   "fluffy",
   "warlike",
   "deliver",
   "crowded",
   "glistening",
   "large",
   "fall",
   "embarrass",
   "road",
   "probable",
   "egg",
   "connect",
   "squealing",
   "lean",
   "idea",
   "placid",
   "attract",
   "steep",
   "adventurous",
   "jaded",
   "messy",
   "pop",
   "land",
   "big",
   "rabbit",
   "last",
   "locket",
   "versed",
   "coherent",
  ]
  expect(hasBeenExecutedAndFailed(executedProcesses, failedProcesses)).toBe(false)
 })

 it("should returns true when we have repeated words words, in each list, (performance test)", () => {
  const executedProcesses = [
   "tumble",
   "roll",
   "boil",
   "suggestion",
   "program",
   "stitch",
   "start",
   "guarantee",
   "x-ray",
   "slave",
   "steady",
   "learned",
   "painful",
   "rain",
   "chase",
   "thankful",
   "loutish",
   "chalk",
   "attractive",
   "lucky",
   "improve",
   "screeching",
   "alleged",
   "new",
   "spoil",
   "tick",
   "holiday",
   "glue",
   "concerned",
   "jam",
   "perpetual",
   "jar",
   "rescue",
   "government",
   "snail",
   "threatening",
   "country",
   "calculator",
   "bitter",
   "successful",
   "symptomatic",
   "teeth",
   "obedient",
   "guiltless",
   "parcel",
   "suspect",
   "avoid",
   "challenge",
   "enchanted",
   "live",
   "fit",
   "ritzy",
   "design",
   "hilarious",
   "smoke",
   "aloof",
   "animated",
  ]
  const failedProcesses = [
   "abounding",
   "son",
   "ancient",
   "electric",
   "chess",
   "observant",
   "sulky",
   "unhealthy",
   "achiever",
   "tall",
   "drop",
   "waste",
   "ugliest",
   "live",
   "fluffy",
   "warlike",
   "deliver",
   "crowded",
   "glistening",
   "large",
   "fall",
   "embarrass",
   "road",
   "probable",
   "egg",
   "connect",
   "squealing",
   "lean",
   "suggestion",
   "idea",
   "placid",
   "attract",
   "steep",
   "adventurous",
   "jaded",
   "messy",
   "pop",
   "land",
   "big",
   "rabbit",
   "last",
   "locket",
   "versed",
   "coherent",
  ]
  expect(hasBeenExecutedAndFailed(executedProcesses, failedProcesses)).toBe(true)
 })
})
