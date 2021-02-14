import ancestorsPlayground from '../../data/paintings/ancestors-playground.yml'
import background from '../../data/paintings/background.yml'
import beneathBearRiver from '../../data/paintings/beneath-bear-river.yml'
import beneathLoosePark from '../../data/paintings/beneath-loose-park.yml'
import beneathOurFeet from '../../data/paintings/beneath-our-feet.yml'
import birdsBearRiver from '../../data/paintings/birds-bear-river.yml'
import blownAway from '../../data/paintings/blown-away.yml'
import closure from '../../data/paintings/closure.yml'
import closureMinidoka from '../../data/paintings/closure-minidoka.yml'
import confetti from '../../data/paintings/confetti.yml'
import deathLivesInEveryMoment from '../../data/paintings/death-lives-in-every-moment.yml'
import dust from '../../data/paintings/dust.yml'
import embedded from '../../data/paintings/embedded.yml'
import ephemera from '../../data/paintings/ephemera.yml'
import fleshOfTheWorld from '../../data/paintings/flesh-of-the-world.yml'
import floatingWorlds from '../../data/paintings/floating-worlds.yml'
import glimmeringSpace from '../../data/paintings/glimmering-space.yml'
import golem from '../../data/paintings/golem.yml'
import hidingOut from '../../data/paintings/hiding-out.yml'
import highPlains from '../../data/paintings/high-plains.yml'
import imStillHere from '../../data/paintings/im-still-here.yml'
import intercession from '../../data/paintings/intercession.yml'
import johnsonsIndianMission from '../../data/paintings/johnsons-indian-mission.yml'
import justInTime from '../../data/paintings/just-in-time.yml'
import kubotaGarden from '../../data/paintings/kubota-garden.yml'
import marbling from '../../data/paintings/marbling.yml'
import medicineTree from '../../data/paintings/medicine-tree.yml'
import missingSite from '../../data/paintings/missing-site.yml'
import mobileHomeMinidoka from '../../data/paintings/mobile-home-minidoka.yml'
import nonVanishing from '../../data/paintings/non-vanishing.yml'
import openUp from '../../data/paintings/open-up.yml'
import oppositions from '../../data/paintings/oppositions.yml'
import passingThrough from '../../data/paintings/passing-through.yml'
import pearlGate from '../../data/paintings/pearl-gate.yml'
import poof from '../../data/paintings/poof.yml'
import prayerTree from '../../data/paintings/prayer-tree.yml'
import prayerTreeOrnaments from '../../data/paintings/prayer-tree-ornaments.yml'
import progeny from '../../data/paintings/progeny.yml'
import secreted from '../../data/paintings/secreted.yml'
import seed from '../../data/paintings/seed.yml'
import skyBeings from '../../data/paintings/sky-beings.yml'
import skyland from '../../data/paintings/skyland.yml'
import skywalk from '../../data/paintings/skywalk.yml'
import slimeTubes from '../../data/paintings/slime-tubes.yml'
import totem from '../../data/paintings/totem.yml'
import undergrowth from '../../data/paintings/undergrowth.yml'

const paintingData = {};

[
  ancestorsPlayground,
  background,
  beneathBearRiver,
  beneathLoosePark,
  beneathOurFeet,
  birdsBearRiver,
  blownAway,
  closure,
  closureMinidoka,
  confetti,
  deathLivesInEveryMoment,
  dust,
  embedded,
  ephemera,
  fleshOfTheWorld,
  floatingWorlds,
  glimmeringSpace,
  golem,
  hidingOut,
  highPlains,
  imStillHere,
  intercession,
  johnsonsIndianMission,
  justInTime,
  kubotaGarden,
  marbling,
  medicineTree,
  missingSite,
  mobileHomeMinidoka,
  nonVanishing,
  openUp,
  oppositions,
  passingThrough,
  pearlGate,
  poof,
  prayerTree,
  prayerTreeOrnaments,
  progeny,
  secreted,
  seed,
  skyBeings,
  skyland,
  skywalk,
  slimeTubes,
  totem,
  undergrowth
].forEach(painting => {
  const slug = painting.slug;
  paintingData[slug] = painting;
});

export { paintingData };
