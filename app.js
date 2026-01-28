const supabaseClient = window.supabaseClient;

const authPanel = document.getElementById("authPanel");
const dashboard = document.getElementById("dashboard");
const logoutBtn = document.getElementById("logoutBtn");
const profileBtn = document.getElementById("profileBtn");
const closeAccountMenu = document.getElementById("closeAccountMenu");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const signupCard = document.getElementById("signupCard");
const resetCard = document.getElementById("resetCard");
const resetRequestForm = document.getElementById("resetRequestForm");
const resetUpdateForm = document.getElementById("resetUpdateForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");
const showReset = document.getElementById("showReset");
const backToLogin = document.getElementById("backToLogin");
const resetBackHome = document.getElementById("resetBackHome");
const resetSubtitle = document.getElementById("resetSubtitle");
const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeSubtitle = document.getElementById("welcomeSubtitle");
const roleChip = document.getElementById("roleChip");
const switchAccount = document.getElementById("switchAccount");

const videoInput = document.getElementById("quickVideoInput");
const videoSelect = document.getElementById("videoSelect");
const loadVideoBtn = document.getElementById("loadVideoBtn");
const videoSelectMobile = document.getElementById("videoSelectMobile");
const loadVideoBtnMobile = document.getElementById("loadVideoBtnMobile");
const editVideoBtn = document.getElementById("editVideoBtn");
const editVideoBtnMobile = document.getElementById("editVideoBtnMobile");
const videoPlayer = document.getElementById("videoPlayer");
const zoomVideo = document.getElementById("zoomVideo");
const openLogModalBtn = document.getElementById("openLogModalBtn");
const openEventsModalBtn = document.getElementById("openEventsModalBtn");
const openClipsModalBtn = document.getElementById("openClipsModalBtn");
const logModal = document.getElementById("logModal");
const closeLogModal = document.getElementById("closeLogModal");
const eventsModal = document.getElementById("eventsModal");
const closeEventsModal = document.getElementById("closeEventsModal");
const clipsModal = document.getElementById("clipsModal");
const closeClipsModal = document.getElementById("closeClipsModal");
const headerCenter = document.querySelector(".header-center");
const mobileVideoBar = document.getElementById("mobileVideoBar");
const videoClickOverlay = document.getElementById("videoClickOverlay");
const videoPlayToggle = document.getElementById("videoPlayToggle");
const logPlayToggle = document.getElementById("logPlayToggle");
const retryLocalBtn = document.getElementById("retryLocalBtn");
const confirmDeleteModal = document.getElementById("confirmDeleteModal");
const cancelDeleteBtn = document.getElementById("cancelDeleteBtn");
const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
const numberPadModal = document.getElementById("numberPadModal");
const numberDisplay = document.getElementById("numberDisplay");
const numberCancelBtn = document.getElementById("numberCancelBtn");
const numberDoneBtn = document.getElementById("numberDoneBtn");
const mobileProgress = document.getElementById("mobileProgress");
const mobileTime = document.getElementById("mobileTime");
const mobileScrollToggle = document.getElementById("mobileScrollToggle");
const modalProgress = document.getElementById("modalProgress");
const modalTime = document.getElementById("modalTime");
const modalScrollToggle = document.getElementById("modalScrollToggle");
const videoMetaModal = document.getElementById("videoMetaModal");
const gameDateInput = document.getElementById("gameDateInput");
const teamNameInput = document.getElementById("teamNameInput");
const opponentNameInput = document.getElementById("opponentNameInput");
const matchingUrlInput = document.getElementById("matchingUrlInput");
const cancelMetaBtn = document.getElementById("cancelMetaBtn");
const saveMetaBtn = document.getElementById("saveMetaBtn");
const quickVideoInput = document.getElementById("quickVideoInput");
const planStatus = document.getElementById("planStatus");
const syncLockStatus = document.getElementById("syncLockStatus");
const externalVideoUrl = document.getElementById("externalVideoUrl");
const saveExternalUrlBtn = document.getElementById("saveExternalUrlBtn");
const useExternalBtn = document.getElementById("useExternalBtn");
const useLocalBtn = document.getElementById("useLocalBtn");
const externalVideoStatus = document.getElementById("externalVideoStatus");
const activePlayer = document.getElementById("activePlayer");
const eventNote = document.getElementById("eventNote");
const ledgerBody = document.getElementById("ledgerBody");
const clipTimeline = document.getElementById("clipTimeline");
const exportBtn = document.getElementById("exportBtn");
const linkCard = document.getElementById("linkCard");
const parentLinkSection = document.getElementById("parentLinkSection");
const playerCodeSection = document.getElementById("playerCodeSection");
const playerCodeDisplay = document.getElementById("playerCodeDisplay");
const playerCodeInput = document.getElementById("playerCodeInput");
const linkPlayerBtn = document.getElementById("linkPlayerBtn");
const linkedPlayers = document.getElementById("linkedPlayers");
const linkedParents = document.getElementById("linkedParents");
const loadingOverlay = document.getElementById("loadingOverlay");
const loadingText = document.getElementById("loadingText");
const locationStatus = document.getElementById("locationStatus");
const logTimeStatus = document.getElementById("logTimeStatus");
const clearLocationBtn = document.getElementById("clearLocationBtn");
const editEventModal = document.getElementById("editEventModal");
const editPlayerNumber = document.getElementById("editPlayerNumber");
const editEventNote = document.getElementById("editEventNote");
const cancelEditEventBtn = document.getElementById("cancelEditEventBtn");
const saveEditEventBtn = document.getElementById("saveEditEventBtn");
const eventDetailModal = document.getElementById("eventDetailModal");
const closeEventDetailModal = document.getElementById("closeEventDetailModal");
const eventZoomVideo = document.getElementById("eventZoomVideo");
const eventProgress = document.getElementById("eventProgress");
const eventTime = document.getElementById("eventTime");
const eventScrollToggle = document.getElementById("eventScrollToggle");
const detailPlayerNumber = document.getElementById("detailPlayerNumber");
const detailEventNote = document.getElementById("detailEventNote");
const detailEventMeta = document.getElementById("detailEventMeta");
const detailEditBtn = document.getElementById("detailEditBtn");
const detailDeleteBtn = document.getElementById("detailDeleteBtn");
const eventDetailTitle = document.getElementById("eventDetailTitle");
const goalModal = document.getElementById("goalModal");
const netContainer = document.getElementById("netContainer");
const closeGoalModal = document.getElementById("closeGoalModal");
const penaltyModal = document.getElementById("penaltyModal");
const penaltyGrid = document.getElementById("penaltyGrid");
const penaltyTitle = document.getElementById("penaltyTitle");
const penaltyInputArea = document.getElementById("penaltyInputArea");
const miscPenaltyInput = document.getElementById("miscPenaltyInput");
const confirmMiscPenalty = document.getElementById("confirmMiscPenalty");
const closePenaltyModal = document.getElementById("closePenaltyModal");

const loginCard = loginForm.closest(".auth-card");

let currentUser = null;
let currentProfile = null;
let currentVideo = null;
let currentEvents = [];
let currentClips = [];
let lastClickCoords = null;
let pendingShotType = null;
let currentPenaltyType = "";
const localVideoCache = new Map();
let currentPlaybackMode = "local";
const zoomLevel = 3.0;
let pendingLocalVideoId = null;
let pendingLocalVideoName = "";
let selectedVideoId = null;
let pendingDeleteEventId = null;
let numberTargetInput = null;
let numberTargetEventId = null;
let pendingEditEventId = null;
let pendingDetailEventId = null;
let savedClickCoords = undefined;
let lastLocalVideoUrl = "";
let lastLocalFile = null;
let lastPickedKey = "";
let lastPickedAt = 0;

const PENALTY_MINORS = [
  "Tripping",
  "Hooking",
  "Slashing",
  "Interference",
  "Roughing",
  "High Sticking",
  "Cross Checking",
  "Holding",
  "Too Many Men",
  "Unsportsmanlike",
  "Boarding",
  "Charging",
];
const PENALTY_MAJORS = [
  "Fighting",
  "Boarding (Major)",
  "Charging (Major)",
  "Check from Behind",
  "Head Contact",
  "Spearing",
  "Kneeing",
];

const setLoading = (isLoading, message = "Working...") => {
  if (!loadingOverlay) return;
  loadingText.textContent = message;
  loadingOverlay.classList.toggle("hidden", !isLoading);
};

const setVideoSource = (url) => {
  videoPlayer.src = url || "";
  if (zoomVideo) {
    zoomVideo.src = url || "";
  }
  updateZoomView();
};

const openLocalVideoPicker = (videoId, videoNameText = "") => {
  pendingLocalVideoId = videoId;
  pendingLocalVideoName = videoNameText || "";
  if (quickVideoInput) {
    quickVideoInput.value = "";
    quickVideoInput.click();
  }
};

const openMetaModal = async () => {
  const targetId = selectedVideoId || currentVideo?.id;
  if (!targetId) {
    alert("Select a video first.");
    return;
  }
  if (!currentVideo || currentVideo.id !== targetId) {
    const { data, error } = await supabaseClient
      .from("videos")
      .select("*")
      .eq("id", targetId)
      .single();
    if (error || !data) {
      alert("Unable to load video details.");
      return;
    }
    currentVideo = data;
  }
  gameDateInput.value = currentVideo.game_date || "";
  teamNameInput.value = currentVideo.team_name || "";
  opponentNameInput.value = currentVideo.opponent_name || "";
  matchingUrlInput.value = currentVideo.matching_video_url || "";
  if (externalVideoUrl) externalVideoUrl.value = currentVideo.external_video_url || "";
  videoMetaModal.classList.remove("hidden");
};

const closeMetaModal = () => {
  videoMetaModal.classList.add("hidden");
};

const setExternalStatus = (text) => {
  if (externalVideoStatus) externalVideoStatus.textContent = text;
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

const updateProgressUI = () => {
  const duration = videoPlayer.duration || 0;
  const current = videoPlayer.currentTime || 0;
  if (mobileProgress) {
    mobileProgress.max = duration;
    mobileProgress.value = current;
  }
  if (modalProgress) {
    modalProgress.max = duration;
    modalProgress.value = current;
  }
  const text = `${formatTime(current)} / ${formatTime(duration || 0)}`;
  if (mobileTime) mobileTime.textContent = text;
  if (modalTime) modalTime.textContent = text;
  if (logTimeStatus) logTimeStatus.textContent = `Video time: ${text}`;
};

const setLogModalOpen = (isOpen) => {
  document.body.classList.toggle("modal-open", isOpen);
};

const applyLocalVideoSource = (url) => {
  if (!url) return;
  setVideoSource(url);
  if (videoPlayer) videoPlayer.load();
};

const refreshLocalVideoFromFile = () => {
  if (!lastLocalFile) return;
  if (lastLocalVideoUrl) {
    URL.revokeObjectURL(lastLocalVideoUrl);
  }
  lastLocalVideoUrl = URL.createObjectURL(lastLocalFile);
  applyLocalVideoSource(lastLocalVideoUrl);
};

const setRetryButtonVisible = (visible) => {
  if (!retryLocalBtn) return;
  retryLocalBtn.classList.toggle("hidden", !visible);
};

const updateEventDetailUI = () => {
  if (!eventZoomVideo) return;
  const duration = eventZoomVideo.duration || 0;
  const current = eventZoomVideo.currentTime || 0;
  if (eventProgress) {
    eventProgress.max = duration;
    eventProgress.value = current;
  }
  const text = `${formatTime(current)} / ${formatTime(duration || 0)}`;
  if (eventTime) eventTime.textContent = text;
};

const openNumberPad = (initialValue = "") => {
  numberTargetInput = document.activeElement;
  if (numberDisplay) {
    numberDisplay.textContent = initialValue || "-";
  }
  numberPadModal.classList.remove("hidden");
};

const closeNumberPad = () => {
  numberPadModal.classList.add("hidden");
  numberTargetInput = null;
  numberTargetEventId = null;
};

let arrowSeekInterval = null;
const arrowSeekRate = 2.5;

const startArrowSeek = (direction) => {
  if (arrowSeekInterval) return;
  arrowSeekInterval = setInterval(() => {
    if (!videoPlayer.duration) return;
    const delta = direction * (arrowSeekRate / 10);
    let nextTime = videoPlayer.currentTime + delta;
    if (nextTime < 0) nextTime = 0;
    if (nextTime > videoPlayer.duration) nextTime = videoPlayer.duration;
    videoPlayer.currentTime = nextTime;
  }, 100);
};

const stopArrowSeek = () => {
  if (arrowSeekInterval) {
    clearInterval(arrowSeekInterval);
    arrowSeekInterval = null;
  }
};

const setupScrollToggle = (button, range) => {
  if (!button || !range) return;
  button.textContent = "Scroll";
  button.addEventListener("click", () => {
    const isScrubEnabled = !range.disabled;
    range.disabled = isScrubEnabled;
    button.textContent = isScrubEnabled ? "Scrub" : "Scroll";
  });
};

const wireSeekButtons = (scope, targetVideo = videoPlayer) => {
  if (!scope) return;
  const seekButtons = scope.querySelectorAll("[data-seek]");
  seekButtons.forEach((btn) => {
    const dir = btn.dataset.seek === "forward" ? 1 : -1;
    if (targetVideo === videoPlayer) {
      btn.addEventListener("pointerdown", () => startArrowSeek(dir));
      btn.addEventListener("pointerup", stopArrowSeek);
      btn.addEventListener("pointerleave", stopArrowSeek);
      btn.addEventListener("pointercancel", stopArrowSeek);
      return;
    }
    let holdInterval = null;
    const startHold = () => {
      if (holdInterval) return;
      holdInterval = setInterval(() => {
        if (!targetVideo.duration) return;
        const delta = dir * (arrowSeekRate / 10);
        let nextTime = targetVideo.currentTime + delta;
        if (nextTime < 0) nextTime = 0;
        if (nextTime > targetVideo.duration) nextTime = targetVideo.duration;
        targetVideo.currentTime = nextTime;
      }, 100);
    };
    const stopHold = () => {
      if (holdInterval) {
        clearInterval(holdInterval);
        holdInterval = null;
      }
    };
    btn.addEventListener("pointerdown", startHold);
    btn.addEventListener("pointerup", stopHold);
    btn.addEventListener("pointerleave", stopHold);
    btn.addEventListener("pointercancel", stopHold);
  });
  const jumpButtons = scope.querySelectorAll("[data-jump]");
  jumpButtons.forEach((btn) => {
    const delta = parseFloat(btn.dataset.jump || "0");
    btn.addEventListener("click", () => {
      if (!targetVideo.duration) return;
      let nextTime = targetVideo.currentTime + delta;
      if (nextTime < 0) nextTime = 0;
      if (nextTime > targetVideo.duration) nextTime = targetVideo.duration;
      targetVideo.currentTime = nextTime;
    });
  });
};

const updateZoomView = (target = zoomVideo) => {
  if (!target) return;
  const x = lastClickCoords ? lastClickCoords.xPct * 100 : 50;
  const y = lastClickCoords ? lastClickCoords.yPct * 100 : 50;
  target.style.transformOrigin = `${x}% ${y}%`;
  target.style.transform = `scale(${zoomLevel})`;
};

const updateLocationStatus = () => {
  if (!locationStatus) return;
  if (!lastClickCoords) {
    locationStatus.textContent = "Tap the video to set ice location.";
    return;
  }
  locationStatus.textContent = `Ice location set (${(
    lastClickCoords.xPct * 100
  ).toFixed(1)}%, ${(lastClickCoords.yPct * 100).toFixed(1)}%).`;
};

const setResetMode = (mode) => {
  const isUpdate = mode === "update";
  resetRequestForm.classList.toggle("hidden", isUpdate);
  resetUpdateForm.classList.toggle("hidden", !isUpdate);
  resetSubtitle.textContent = isUpdate
    ? "Set a new password below."
    : "Enter your email and we will send a reset link.";
};

const setAuthView = (view) => {
  loginCard.classList.toggle("hidden", view !== "login");
  signupCard.classList.toggle("hidden", view !== "signup");
  resetCard.classList.toggle("hidden", view !== "reset");
  if (view === "reset") {
    setResetMode("request");
  }
};

window.showSignupView = () => setAuthView("signup");
window.showLoginView = () => setAuthView("login");
window.showResetView = () => setAuthView("reset");

const showDashboard = (profile) => {
  authPanel.classList.add("hidden");
  dashboard.classList.remove("hidden");
  if (headerCenter) headerCenter.classList.remove("hidden");
  if (mobileVideoBar) mobileVideoBar.classList.remove("hidden");
  welcomeTitle.textContent = `Welcome, ${profile.full_name || "Coach"}`;
  roleChip.textContent = profile.role || "Player";
  const name = (profile.full_name || "User").trim();
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
  profileBtn.textContent = initials || "U";
  updatePlanUI();
};

const showAuth = () => {
  dashboard.classList.add("hidden");
  authPanel.classList.remove("hidden");
  if (headerCenter) headerCenter.classList.add("hidden");
  if (mobileVideoBar) mobileVideoBar.classList.add("hidden");
  setAuthView("login");
};

const fetchProfile = async (userId) => {
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("*")
    .eq("user_id", userId)
    .single();
  if (error) {
    console.error(error);
    return { full_name: "", role: "Parent" };
  }
  return data;
};

const getPlanLabel = (tier) => {
  if (tier === "basic") return "$2.99/mo Storage";
  if (tier === "sync") return "$4.99/mo Sync";
  return "Free trial (7 days)";
};

const isSyncAllowed = () => currentProfile?.subscription_tier === "sync";

const updatePlanUI = () => {
  if (planStatus) {
    planStatus.textContent = getPlanLabel(currentProfile?.subscription_tier);
  }
  if (syncLockStatus) {
    syncLockStatus.classList.toggle("hidden", isSyncAllowed());
  }
  if (saveExternalUrlBtn) {
    saveExternalUrlBtn.disabled = !isSyncAllowed();
  }
  if (useExternalBtn) {
    useExternalBtn.disabled = !isSyncAllowed();
  }
};

const setEditVisibility = (hasSelection) => {
  if (editVideoBtn) {
    editVideoBtn.classList.toggle("is-hidden", !hasSelection);
  }
  if (editVideoBtnMobile) {
    editVideoBtnMobile.classList.toggle("is-hidden", !hasSelection);
  }
};

const loadVideos = async () => {
  const resetSelect = (select) => {
    if (!select) return;
    select.innerHTML = "";
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a video";
    select.appendChild(placeholder);
  };

  resetSelect(videoSelect);
  resetSelect(videoSelectMobile);

  const { data, error } = await supabaseClient
    .from("videos")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return;
  }

  data.forEach((video) => {
    const option = document.createElement("option");
    option.value = video.id;
    const label = video.title || video.original_filename || "Video";
    option.textContent = video.external_video_url ? `📺 ${label}` : label;
    option.dataset.storageBucket = video.storage_bucket || "";
    option.dataset.externalUrl = video.external_video_url || "";
    option.dataset.title = option.textContent;
    if (videoSelect) {
      const optionClone = option.cloneNode(true);
      optionClone.dataset.storageBucket = option.dataset.storageBucket;
      optionClone.dataset.externalUrl = option.dataset.externalUrl;
      optionClone.dataset.title = option.dataset.title;
      videoSelect.appendChild(optionClone);
    }
    if (videoSelectMobile) {
      const optionMobile = document.createElement("option");
      optionMobile.value = option.value;
      optionMobile.textContent = option.textContent;
      optionMobile.dataset.storageBucket = option.dataset.storageBucket;
      optionMobile.dataset.externalUrl = option.dataset.externalUrl;
      optionMobile.dataset.title = option.dataset.title;
      videoSelectMobile.appendChild(optionMobile);
    }
  });

  if (selectedVideoId && data.some((video) => video.id === selectedVideoId)) {
    if (videoSelect) videoSelect.value = selectedVideoId;
    if (videoSelectMobile) videoSelectMobile.value = selectedVideoId;
    setEditVisibility(true);
  } else {
    setEditVisibility(false);
  }
};

const loadVideoById = async (videoId) => {
  const { data, error } = await supabaseClient
    .from("videos")
    .select("*")
    .eq("id", videoId)
    .single();
  if (error || !data) {
    console.error(error);
    return;
  }

  let signedData = null;
  if (data.storage_bucket && data.storage_bucket !== "local") {
    const { data: signed, error: signedError } = await supabaseClient
      .storage
      .from(data.storage_bucket || "videos")
      .createSignedUrl(data.storage_path, 60 * 60);
    if (signedError) {
      console.error(signedError);
    } else {
      signedData = signed;
    }
  }

  currentVideo = data;
  // Header dropdown shows selection; no inline filename label.
  selectedVideoId = data.id;
  setEditVisibility(true);
  if (data.external_video_url && isSyncAllowed()) {
    currentPlaybackMode = "external";
    setVideoSource(data.external_video_url);
    setExternalStatus("Using external link.");
  } else if (data.storage_bucket === "local") {
    const cachedUrl =
      localVideoCache.get(data.id) ||
      localVideoCache.get(
        `${currentUser?.id}:${data.original_filename}:${data.file_size || ""}:${data.file_last_modified || ""}`
      );
    if (cachedUrl) {
      setVideoSource(cachedUrl);
      setExternalStatus("Using local file.");
    } else {
      setVideoSource("");
      setExternalStatus("Select the local file to play.");
      return;
    }
  } else if (signedData?.signedUrl) {
    setVideoSource(signedData.signedUrl);
    setExternalStatus(
      data.external_video_url ? "External link saved." : "No external link saved."
    );
  }
  if (externalVideoUrl) {
    externalVideoUrl.value = data.external_video_url || "";
  }
  if (videoSelect) videoSelect.value = data.id;
  if (videoSelectMobile) videoSelectMobile.value = data.id;
  await Promise.all([loadEvents(data.id), loadClips(data.id)]);
};

const renderLedger = () => {
  ledgerBody.innerHTML = "";
  if (currentEvents.length === 0) {
    const empty = document.createElement("p");
    empty.className = "muted ledger-empty";
    empty.textContent = "No events logged yet.";
    ledgerBody.appendChild(empty);
    return;
  }

  currentEvents.forEach((eventItem) => {
    const row = document.createElement("div");
    row.className = "ledger-item";
    row.innerHTML = `
      <span>${formatTime(eventItem.video_time_seconds || 0)}</span>
      <span>${eventItem.player_number || "--"}</span>
      <span>${eventItem.event_type}</span>
    `;
    row.addEventListener("click", () => {
      openEventDetail(eventItem);
    });
    ledgerBody.appendChild(row);
  });
};

const pauseAllVideos = () => {
  if (videoPlayer && !videoPlayer.paused) videoPlayer.pause();
  if (zoomVideo && !zoomVideo.paused) zoomVideo.pause();
  if (eventZoomVideo && !eventZoomVideo.paused) eventZoomVideo.pause();
};

const openEventDetail = (eventItem) => {
  if (!eventDetailModal || !eventItem) return;
  pendingDetailEventId = eventItem.id;
  pauseAllVideos();

  savedClickCoords = lastClickCoords;
  if (eventItem.ice_x !== null && eventItem.ice_y !== null) {
    lastClickCoords = { xPct: eventItem.ice_x / 100, yPct: eventItem.ice_y / 100 };
  } else {
    lastClickCoords = null;
  }

  if (detailPlayerNumber) detailPlayerNumber.value = eventItem.player_number || "";
  if (detailEventNote) detailEventNote.value = eventItem.note || "";
  if (detailEventMeta) {
    detailEventMeta.textContent = `${eventItem.event_type} · ${formatTime(
      eventItem.video_time_seconds || 0
    )}`;
  }
  if (eventDetailTitle) {
    eventDetailTitle.textContent = eventItem.event_type || "Event clip";
  }

  if (eventZoomVideo) {
    const source = videoPlayer.currentSrc || videoPlayer.src || "";
    if (source && eventZoomVideo.src !== source) {
      eventZoomVideo.src = source;
    }
    eventZoomVideo.currentTime = eventItem.video_time_seconds || 0;
    eventZoomVideo.pause();
    updateZoomView(eventZoomVideo);
    updateEventDetailUI();
  }

  eventDetailModal.classList.remove("hidden");
};

const renderClips = () => {
  clipTimeline.innerHTML = "";
  if (currentClips.length === 0) {
    const empty = document.createElement("p");
    empty.className = "muted clip-empty";
    empty.textContent = "No clip requests yet.";
    clipTimeline.appendChild(empty);
    return;
  }

  currentClips.forEach((clip) => {
    const item = document.createElement("div");
    item.className = "clip-item";
    item.innerHTML = `
      <div class="clip-meta">
        <span>${formatTime(clip.start_time_seconds)} - ${formatTime(
      clip.end_time_seconds
    )}</span>
        <span class="clip-status">${clip.status}</span>
      </div>
      <strong>${clip.event_type || "Logged event"}</strong>
      <button class="ghost-btn" type="button">Open clip</button>
    `;

    const button = item.querySelector("button");
    button.addEventListener("click", async () => {
      if (!clip.storage_path || clip.status !== "ready") {
        alert("Clip is not ready yet.");
        return;
      }
      const { data: signedData, error: signedError } = await supabaseClient
        .storage
        .from(clip.storage_bucket || "clips")
        .createSignedUrl(clip.storage_path, 60 * 60);
      if (signedError) {
        console.error(signedError);
        return;
      }
      window.open(signedData.signedUrl, "_blank");
    });

    clipTimeline.appendChild(item);
  });
};

const getVideoClickCoords = (event) => {
  const rect = videoPlayer.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
    return null;
  }
  return { xPct: x / rect.width, yPct: y / rect.height };
};

const loadEvents = async (videoId) => {
  const { data, error } = await supabaseClient
    .from("events")
    .select("*")
    .eq("video_id", videoId)
    .order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return;
  }
  const seen = new Set();
  currentEvents = (data || []).filter((eventItem) => {
    if (!eventItem?.id || seen.has(eventItem.id)) return false;
    seen.add(eventItem.id);
    return true;
  });
  renderLedger();
};

const loadClips = async (videoId) => {
  const { data, error } = await supabaseClient
    .from("clips")
    .select("*, events(event_type)")
    .eq("video_id", videoId)
    .order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return;
  }
  currentClips = data.map((clip) => ({
    ...clip,
    event_type: clip.events?.event_type || "Event",
  }));
  renderClips();
};

const logEvent = async (eventType, extraData = {}) => {
  if (!currentUser || !currentVideo) {
    alert("Upload or select a video first.");
    return;
  }

  const payload = {
    user_id: currentUser.id,
    video_id: currentVideo.id,
    event_type: eventType,
    note: eventNote.value.trim(),
    player_number: activePlayer.value.trim(),
    video_time_seconds: videoPlayer.currentTime || 0,
    ice_x: lastClickCoords ? lastClickCoords.xPct * 100 : null,
    ice_y: lastClickCoords ? lastClickCoords.yPct * 100 : null,
    goal_x: extraData.goal_x ?? null,
    goal_y: extraData.goal_y ?? null,
  };

  setLoading(true, "Saving event...");
  try {
    const { error } = await supabaseClient.from("events").insert(payload);
    if (error) {
      console.error(error);
      alert("Unable to log event.");
      return;
    }

    eventNote.value = "";
    await Promise.all([loadEvents(currentVideo.id), loadClips(currentVideo.id)]);
  } finally {
    setLoading(false);
  }
};

const downloadCsv = () => {
  if (!currentEvents.length) {
    alert("No events to export yet.");
    return;
  }

  const csv = [
    ["Time", "Player", "Event", "VideoTime", "Note"].join(","),
    ...currentEvents.map((item) =>
      [
        item.created_at,
        item.player_number || "",
        item.event_type,
        item.video_time_seconds,
        item.note || "",
      ].join(",")
    ),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "icepulse-session.csv";
  link.click();
  URL.revokeObjectURL(url);
};

showSignup.addEventListener("click", () => setAuthView("signup"));
showLogin.addEventListener("click", () => setAuthView("login"));
showReset.addEventListener("click", () => setAuthView("reset"));
backToLogin.addEventListener("click", () => setAuthView("login"));
resetBackHome.addEventListener("click", () => setAuthView("login"));

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim().toLowerCase();
  const role = document.getElementById("signupRole").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("signupPasswordConfirm").value;

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  setLoading(true, "Creating account...");
  try {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name, role },
        emailRedirectTo: window.location.origin,
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    if (data.session) {
      const now = new Date();
      const trialEnds = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      await supabaseClient
        .from("profiles")
        .update({
          subscription_tier: "trial",
          trial_started_at: now.toISOString(),
          trial_ends_at: trialEnds.toISOString(),
        })
        .eq("user_id", data.session.user.id);
      await startSession(data.session);
    } else {
      alert("Check your email to confirm your account.");
    }
  } finally {
    setLoading(false);
  }
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;

  setLoading(true, "Signing in...");
  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Invalid credentials.");
      return;
    }

    await startSession(data.session);
  } finally {
    setLoading(false);
  }
});

resetRequestForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = document.getElementById("resetEmail").value.trim().toLowerCase();
  setLoading(true, "Sending reset link...");
  try {
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin,
    });
    if (error) {
      alert(error.message);
      return;
    }
    resetSubtitle.textContent = "Check your email for a reset link.";
  } finally {
    setLoading(false);
  }
});

resetUpdateForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const newPassword = document.getElementById("newPassword").value;
  if (newPassword.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }
  setLoading(true, "Updating password...");
  try {
    const { error } = await supabaseClient.auth.updateUser({
      password: newPassword,
    });
    if (error) {
      alert(error.message);
      return;
    }
    alert("Password updated. Please log in.");
    setAuthView("login");
  } finally {
    setLoading(false);
  }
});

logoutBtn.addEventListener("click", async () => {
  const menu = document.getElementById("accountMenu");
  if (menu) menu.classList.add("hidden");
  await supabaseClient.auth.signOut();
  currentUser = null;
  currentProfile = null;
  currentVideo = null;
  currentEvents = [];
  currentClips = [];
  showAuth();
});

switchAccount.addEventListener("click", async () => {
  const menu = document.getElementById("accountMenu");
  if (menu) menu.classList.add("hidden");
  await supabaseClient.auth.signOut();
  currentUser = null;
  currentProfile = null;
  currentVideo = null;
  currentEvents = [];
  currentClips = [];
  showAuth();
});

const handleLocalFileSelection = async (file) => {
  if (!file || !currentUser) return;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  const safeName = file.name.replace(/\s+/g, "-");
  const storagePath = `local/${Date.now()}-${safeName}`;
  const localUrl = URL.createObjectURL(file);
  const cacheKey = `${currentUser.id}:${file.name}:${file.size}:${file.lastModified}`;

  currentPlaybackMode = "local";
  setExternalStatus("Using local file.");
  lastLocalVideoUrl = localUrl;
  lastLocalFile = file;
  applyLocalVideoSource(localUrl);
  setRetryButtonVisible(true);
  if (isIOS) {
    file
      .arrayBuffer()
      .then((buffer) => {
        const stableBlob = new Blob([buffer], { type: file.type || "video/mp4" });
        lastLocalFile = stableBlob;
        if (lastLocalVideoUrl) {
          URL.revokeObjectURL(lastLocalVideoUrl);
        }
        lastLocalVideoUrl = URL.createObjectURL(stableBlob);
        applyLocalVideoSource(lastLocalVideoUrl);
      })
      .catch((error) => {
        console.warn("Unable to copy video blob.", error);
      });
  }
  setTimeout(() => {
    if (currentPlaybackMode === "local" && lastLocalVideoUrl === localUrl) {
      applyLocalVideoSource(localUrl);
    }
  }, 200);
  setTimeout(() => {
    if (currentPlaybackMode === "local" && lastLocalVideoUrl === localUrl) {
      applyLocalVideoSource(localUrl);
    }
  }, 800);

  const targetId = pendingLocalVideoId || selectedVideoId;
  if (targetId) {
    const { error } = await supabaseClient
      .from("videos")
      .update({
        title: file.name,
        original_filename: file.name,
        storage_path: storagePath,
        storage_bucket: "local",
        status: "local",
        file_size: file.size,
        file_last_modified: file.lastModified,
      })
      .eq("id", targetId);
    if (error) {
      console.error(error);
      alert("Unable to update local video.");
      return;
    }
    localVideoCache.set(targetId, localUrl);
    localVideoCache.set(cacheKey, localUrl);
    selectedVideoId = targetId;
    await loadVideos();
    await loadVideoById(targetId);
    if (currentPlaybackMode === "local") {
      setVideoSource(localUrl);
      if (videoPlayer) videoPlayer.load();
    }
    setRetryButtonVisible(true);
    pendingLocalVideoId = null;
    return;
  }

  const { data, error } = await supabaseClient
    .from("videos")
    .insert({
      user_id: currentUser.id,
      title: file.name,
      original_filename: file.name,
      storage_path: storagePath,
      storage_bucket: "local",
      status: "local",
      file_size: file.size,
      file_last_modified: file.lastModified,
    })
    .select()
    .single();

  if (error) {
    console.error(error);
    alert("Unable to save local video metadata.");
    return;
  }

  localVideoCache.set(data.id, localUrl);
  localVideoCache.set(cacheKey, localUrl);
  selectedVideoId = data.id;
  await loadVideos();
  await loadVideoById(data.id);
  if (currentPlaybackMode === "local") {
    setVideoSource(localUrl);
    if (videoPlayer) videoPlayer.load();
  }
  setRetryButtonVisible(true);
};

const handlePickedFile = async (file) => {
  if (!file) return;
  const key = `${file.name}-${file.size}-${file.lastModified || 0}`;
  const now = Date.now();
  if (key === lastPickedKey && now - lastPickedAt < 2000) return;
  lastPickedKey = key;
  lastPickedAt = now;
  await handleLocalFileSelection(file);
};

if (quickVideoInput) {
  quickVideoInput.addEventListener("change", async (event) => {
    await handlePickedFile(event.target.files[0]);
  });
  quickVideoInput.addEventListener("input", async (event) => {
    await handlePickedFile(event.target.files[0]);
  });
}

loadVideoBtn.addEventListener("click", () => {
  openLocalVideoPicker(null);
});

if (videoSelect) {
  videoSelect.addEventListener("change", async () => {
    const videoId = videoSelect.value;
      if (!videoId) {
        setVideoSource("");
        setEditVisibility(false);
        return;
      }
      selectedVideoId = videoId;
      setEditVisibility(true);
    const option = videoSelect.options[videoSelect.selectedIndex];
    if (option?.dataset?.storageBucket === "local" && !localVideoCache.has(videoId)) {
      openLocalVideoPicker(videoId, option?.dataset?.title || "");
      return;
    }
    await loadVideoById(videoId);
  });
}

if (loadVideoBtnMobile) {
  loadVideoBtnMobile.addEventListener("click", () => {
    openLocalVideoPicker(null);
  });
}

if (videoSelectMobile) {
  videoSelectMobile.addEventListener("change", () => {
    if (videoSelect) videoSelect.value = videoSelectMobile.value;
  });
}

if (videoSelectMobile) {
  videoSelectMobile.addEventListener("change", async () => {
    const videoId = videoSelectMobile.value;
      if (!videoId) {
        setVideoSource("");
        setEditVisibility(false);
        return;
      }
      selectedVideoId = videoId;
      setEditVisibility(true);
    const option = videoSelectMobile.options[videoSelectMobile.selectedIndex];
    if (option?.dataset?.storageBucket === "local" && !localVideoCache.has(videoId)) {
      openLocalVideoPicker(videoId, option?.dataset?.title || "");
      return;
    }
    await loadVideoById(videoId);
  });
}

if (editVideoBtn) {
  editVideoBtn.addEventListener("click", () => {
    openMetaModal();
  });
}

if (editVideoBtnMobile) {
  editVideoBtnMobile.addEventListener("click", () => {
    openMetaModal();
  });
}

if (openLogModalBtn) {
  openLogModalBtn.addEventListener("click", () => {
    logModal.classList.remove("hidden");
    setLogModalOpen(true);
  });
}

if (closeLogModal) {
  closeLogModal.addEventListener("click", () => {
    logModal.classList.add("hidden");
    setLogModalOpen(false);
  });
}

if (openEventsModalBtn) {
  openEventsModalBtn.addEventListener("click", () =>
    eventsModal.classList.remove("hidden")
  );
}

if (closeEventsModal) {
  closeEventsModal.addEventListener("click", () => eventsModal.classList.add("hidden"));
}

if (closeEventDetailModal) {
  closeEventDetailModal.addEventListener("click", () => {
    if (eventZoomVideo) eventZoomVideo.pause();
    if (eventDetailModal) eventDetailModal.classList.add("hidden");
    pendingDetailEventId = null;
    if (savedClickCoords !== undefined) {
      lastClickCoords = savedClickCoords;
      savedClickCoords = undefined;
      updateZoomView();
    }
  });
}

if (openClipsModalBtn) {
  openClipsModalBtn.addEventListener("click", () =>
    clipsModal.classList.remove("hidden")
  );
}

if (closeClipsModal) {
  closeClipsModal.addEventListener("click", () => clipsModal.classList.add("hidden"));
}

if (cancelDeleteBtn) {
  cancelDeleteBtn.addEventListener("click", () => {
    pendingDeleteEventId = null;
    confirmDeleteModal.classList.add("hidden");
  });
}

if (confirmDeleteBtn) {
  confirmDeleteBtn.addEventListener("click", async () => {
    if (!pendingDeleteEventId) return;
    setLoading(true, "Deleting event...");
    try {
      const { error } = await supabaseClient
        .from("events")
        .delete()
        .eq("id", pendingDeleteEventId);
      if (error) {
        alert(error.message);
        return;
      }
      pendingDeleteEventId = null;
      confirmDeleteModal.classList.add("hidden");
      if (eventDetailModal) eventDetailModal.classList.add("hidden");
      if (savedClickCoords !== undefined) {
        lastClickCoords = savedClickCoords;
        savedClickCoords = undefined;
        updateZoomView();
      }
      if (currentVideo) {
        await loadEvents(currentVideo.id);
        await loadClips(currentVideo.id);
      }
    } finally {
      setLoading(false);
    }
  });
}

if (numberCancelBtn) {
  numberCancelBtn.addEventListener("click", closeNumberPad);
}

if (numberDoneBtn) {
  numberDoneBtn.addEventListener("click", async () => {
    const value = numberDisplay.textContent === "-" ? "" : numberDisplay.textContent;
    if (numberTargetEventId) {
      const { error } = await supabaseClient
        .from("events")
        .update({ player_number: value })
        .eq("id", numberTargetEventId);
      if (error) {
        alert(error.message);
        return;
      }
      if (currentVideo) await loadEvents(currentVideo.id);
    } else if (numberTargetInput) {
      numberTargetInput.value = value;
    }
    closeNumberPad();
  });
}

if (editPlayerNumber) {
  editPlayerNumber.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    openNumberPad(editPlayerNumber.value);
  });
  editPlayerNumber.addEventListener("focus", () => openNumberPad(editPlayerNumber.value));
  editPlayerNumber.addEventListener("click", () => openNumberPad(editPlayerNumber.value));
}

if (cancelEditEventBtn) {
  cancelEditEventBtn.addEventListener("click", () => {
    pendingEditEventId = null;
    if (editEventModal) editEventModal.classList.add("hidden");
  });
}

if (saveEditEventBtn) {
  saveEditEventBtn.addEventListener("click", async () => {
    if (!pendingEditEventId) return;
    setLoading(true, "Saving edit...");
    try {
      const { error } = await supabaseClient
        .from("events")
        .update({
          player_number: editPlayerNumber?.value.trim() || "",
          note: editEventNote?.value.trim() || "",
        })
        .eq("id", pendingEditEventId);
      if (error) {
        alert(error.message);
        return;
      }
      pendingEditEventId = null;
      if (editEventModal) editEventModal.classList.add("hidden");
      if (currentVideo) await loadEvents(currentVideo.id);
    } finally {
      setLoading(false);
    }
  });
}

if (detailEditBtn) {
  detailEditBtn.addEventListener("click", () => {
    if (!pendingDetailEventId) return;
    pendingEditEventId = pendingDetailEventId;
    if (editPlayerNumber) editPlayerNumber.value = detailPlayerNumber?.value || "";
    if (editEventNote) editEventNote.value = detailEventNote?.value || "";
    if (eventDetailModal) eventDetailModal.classList.add("hidden");
    if (editEventModal) editEventModal.classList.remove("hidden");
  });
}

if (detailDeleteBtn) {
  detailDeleteBtn.addEventListener("click", () => {
    if (!pendingDetailEventId) return;
    pendingDeleteEventId = pendingDetailEventId;
    if (confirmDeleteModal) confirmDeleteModal.classList.remove("hidden");
  });
}

if (numberPadModal) {
  numberPadModal.querySelectorAll("[data-num]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const num = btn.dataset.num;
      const current = numberDisplay.textContent === "-" ? "" : numberDisplay.textContent;
      numberDisplay.textContent = `${current}${num}`.slice(0, 2);
    });
  });
  numberPadModal.querySelectorAll("[data-action]").forEach((btn) => {
    const action = btn.dataset.action;
    btn.addEventListener("click", () => {
      const current = numberDisplay.textContent === "-" ? "" : numberDisplay.textContent;
      if (action === "clear") {
        numberDisplay.textContent = "-";
      }
      if (action === "delete") {
        numberDisplay.textContent = current.slice(0, -1) || "-";
      }
    });
  });
}

if (activePlayer) {
  activePlayer.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    openNumberPad(activePlayer.value);
  });
  activePlayer.addEventListener("focus", () => openNumberPad(activePlayer.value));
  activePlayer.addEventListener("click", () => openNumberPad(activePlayer.value));
}

if (mobileProgress) {
  mobileProgress.addEventListener("input", () => {
    videoPlayer.currentTime = parseFloat(mobileProgress.value || "0");
  });
}

if (modalProgress) {
  modalProgress.addEventListener("input", () => {
    videoPlayer.currentTime = parseFloat(modalProgress.value || "0");
  });
}

if (eventProgress && eventZoomVideo) {
  eventProgress.addEventListener("input", () => {
    eventZoomVideo.currentTime = parseFloat(eventProgress.value || "0");
  });
}

setupScrollToggle(mobileScrollToggle, mobileProgress);
setupScrollToggle(modalScrollToggle, modalProgress);
setupScrollToggle(eventScrollToggle, eventProgress);

wireSeekButtons(document.getElementById("mobileControls"));
wireSeekButtons(document.querySelector(".modal-controls"));
wireSeekButtons(document.querySelector(".event-controls"), eventZoomVideo);

if (eventZoomVideo) {
  eventZoomVideo.addEventListener("loadedmetadata", updateEventDetailUI);
  eventZoomVideo.addEventListener("timeupdate", updateEventDetailUI);
}


if (cancelMetaBtn) {
  cancelMetaBtn.addEventListener("click", closeMetaModal);
}

if (saveMetaBtn) {
  saveMetaBtn.addEventListener("click", async () => {
    if (!currentVideo) return;
    const payload = {
      game_date: gameDateInput.value || null,
      team_name: teamNameInput.value.trim() || null,
      opponent_name: opponentNameInput.value.trim() || null,
      matching_video_url: matchingUrlInput.value.trim() || null,
    };
    setLoading(true, "Saving details...");
    try {
      const { error } = await supabaseClient
        .from("videos")
        .update(payload)
        .eq("id", currentVideo.id);
      if (error) {
        alert(error.message);
        return;
      }
      currentVideo = { ...currentVideo, ...payload };
      externalVideoUrl.value = currentVideo.external_video_url || "";
      setExternalStatus(
        currentVideo.external_video_url ? "External link saved." : "No external link saved."
      );
      closeMetaModal();
    } finally {
      setLoading(false);
    }
  });
}

saveExternalUrlBtn.addEventListener("click", async () => {
  if (!currentVideo) return;
  if (!isSyncAllowed()) {
    alert("Sync requires the $4.99/mo plan.");
    return;
  }
  const url = externalVideoUrl.value.trim();
  setLoading(true, "Saving external link...");
  try {
    const { error } = await supabaseClient
      .from("videos")
      .update({ external_video_url: url || null })
      .eq("id", currentVideo.id);
    if (error) {
      alert(error.message);
      return;
    }
    currentVideo.external_video_url = url || null;
    setExternalStatus(url ? "External link saved." : "External link cleared.");
  } finally {
    setLoading(false);
  }
});

useExternalBtn.addEventListener("click", async () => {
  if (!currentVideo || !currentVideo.external_video_url) {
    alert("No external link saved.");
    return;
  }
  if (!isSyncAllowed()) {
    alert("Sync requires the $4.99/mo plan.");
    return;
  }
  currentPlaybackMode = "external";
  setVideoSource(currentVideo.external_video_url);
  setExternalStatus("Using external link.");
});

useLocalBtn.addEventListener("click", async () => {
  if (!currentVideo) return;
  currentPlaybackMode = "local";
  if (currentVideo.storage_bucket === "local") {
    const cachedUrl = localVideoCache.get(currentVideo.id);
    if (!cachedUrl) {
      alert("Select the local file again to play.");
      return;
    }
    setVideoSource(cachedUrl);
    setExternalStatus("Using local file.");
    return;
  }
  const { data: signedData, error: signedError } = await supabaseClient
    .storage
    .from(currentVideo.storage_bucket || "videos")
    .createSignedUrl(currentVideo.storage_path, 60 * 60);
  if (signedError) {
    alert("Unable to load local upload.");
    return;
  }
  setVideoSource(signedData.signedUrl);
  setExternalStatus(
    currentVideo.external_video_url ? "External link saved." : "No external link saved."
  );
});

document.querySelectorAll(".secondary-btn").forEach((button) => {
  if (button.classList.contains("event-btn")) return;
  button.addEventListener("click", async () => {
    const eventType = button.dataset.event;
    if (eventType === "Custom") {
      const custom = prompt("Custom event name?");
      if (!custom) return;
      await logEvent(custom);
      return;
    }
    await logEvent(eventType);
  });
});

exportBtn.addEventListener("click", downloadCsv);

document.querySelectorAll("[data-plan]").forEach((button) => {
  button.addEventListener("click", async () => {
    const tier = button.dataset.plan;
    if (!currentProfile) return;
    const now = new Date();
    const trialEnds = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    setLoading(true, "Updating plan...");
    try {
      const { error } = await supabaseClient
        .from("profiles")
        .update({
          subscription_tier: tier,
          trial_started_at: now.toISOString(),
          trial_ends_at: trialEnds.toISOString(),
        })
        .eq("user_id", currentUser.id);
      if (error) {
        alert(error.message);
        return;
      }
      currentProfile.subscription_tier = tier;
      updatePlanUI();
    } finally {
      setLoading(false);
    }
  });
});

profileBtn.addEventListener("click", () => {
  const menu = document.getElementById("accountMenu");
  menu.classList.toggle("hidden");
});

if (closeAccountMenu) {
  closeAccountMenu.addEventListener("click", () => {
    const menu = document.getElementById("accountMenu");
    if (menu) menu.classList.add("hidden");
  });
}

document.addEventListener("click", (event) => {
  const menu = document.getElementById("accountMenu");
  const menuWrap = document.querySelector(".account-menu");
  if (!menu || !menuWrap) return;
  if (!menuWrap.contains(event.target)) {
    menu.classList.add("hidden");
  }
});

videoPlayer.addEventListener("play", () => {
  if (zoomVideo) zoomVideo.play();
  if (videoPlayToggle) videoPlayToggle.classList.add("is-playing");
  if (logPlayToggle) logPlayToggle.classList.add("is-playing");
});

videoPlayer.addEventListener("pause", () => {
  if (zoomVideo) zoomVideo.pause();
  if (videoPlayToggle) videoPlayToggle.classList.remove("is-playing");
  if (logPlayToggle) logPlayToggle.classList.remove("is-playing");
});

videoPlayer.addEventListener("loadedmetadata", () => {
  if (videoPlayer.duration && videoPlayer.duration > 0) {
    setRetryButtonVisible(false);
  }
});

videoPlayer.addEventListener("seeking", () => {
  if (zoomVideo) zoomVideo.currentTime = videoPlayer.currentTime;
  updateProgressUI();
});

videoPlayer.addEventListener("timeupdate", () => {
  if (!zoomVideo) return;
  if (Math.abs(zoomVideo.currentTime - videoPlayer.currentTime) > 0.15) {
    zoomVideo.currentTime = videoPlayer.currentTime;
  }
  updateProgressUI();
});

document.addEventListener(
  "keydown",
  (event) => {
  if (event.repeat) return;
  const tag = event.target.tagName?.toLowerCase();
  if (tag === "input" || tag === "textarea" || tag === "select") return;
  if (event.code === "Space") {
    event.preventDefault();
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
    return;
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    startArrowSeek(1);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    startArrowSeek(-1);
  }
  },
  true
);

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  if (currentPlaybackMode !== "local") return;
  refreshLocalVideoFromFile();
});

window.addEventListener("pageshow", () => {
  if (currentPlaybackMode !== "local") return;
  refreshLocalVideoFromFile();
});

window.addEventListener("focus", () => {
  if (currentPlaybackMode !== "local") return;
  refreshLocalVideoFromFile();
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    stopArrowSeek();
  }
});

if (videoClickOverlay) {
  videoClickOverlay.addEventListener("click", (event) => {
    const coords = getVideoClickCoords(event);
    if (!coords) return;
    videoPlayer.pause();
    lastClickCoords = coords;
    updateLocationStatus();
    updateZoomView();
    if (logModal) {
      logModal.classList.remove("hidden");
      setLogModalOpen(true);
    }
  });
}

if (videoPlayToggle) {
  videoPlayToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  });
}

if (logPlayToggle) {
  logPlayToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  });
}

if (retryLocalBtn) {
  retryLocalBtn.addEventListener("click", () => {
    refreshLocalVideoFromFile();
  });
}

clearLocationBtn.addEventListener("click", () => {
  lastClickCoords = null;
  updateLocationStatus();
  updateZoomView();
});

const openGoalModal = (eventType) => {
  pendingShotType = eventType;
  goalModal.classList.remove("hidden");
};

const closeGoalModalHandler = () => {
  pendingShotType = null;
  goalModal.classList.add("hidden");
};

netContainer.addEventListener("click", (event) => {
  if (!pendingShotType) return;
  const rect = netContainer.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  logEvent(pendingShotType, { goal_x: x, goal_y: y });
  closeGoalModalHandler();
});

closeGoalModal.addEventListener("click", closeGoalModalHandler);

const openPenaltySelector = (type) => {
  currentPenaltyType = type;
  penaltyGrid.innerHTML = "";
  penaltyInputArea.classList.add("hidden");

  let list = [];
  if (type === "Minor") list = PENALTY_MINORS;
  if (type === "Major") list = PENALTY_MAJORS;

  if (type === "Misc") {
    penaltyInputArea.classList.remove("hidden");
    penaltyTitle.textContent = "Misc penalty";
    penaltyModal.classList.remove("hidden");
    miscPenaltyInput.focus();
    return;
  }

  list.forEach((penalty) => {
    const button = document.createElement("button");
    button.className = "secondary-btn";
    button.type = "button";
    button.textContent = penalty;
    button.addEventListener("click", () => {
      logEvent(`Penalty (${penalty})`);
      penaltyModal.classList.add("hidden");
    });
    penaltyGrid.appendChild(button);
  });

  penaltyTitle.textContent = `Select ${type} penalty`;
  penaltyModal.classList.remove("hidden");
};

confirmMiscPenalty.addEventListener("click", () => {
  const val = miscPenaltyInput.value.trim();
  if (val) {
    logEvent(`Penalty (${val})`);
  }
  miscPenaltyInput.value = "";
  penaltyModal.classList.add("hidden");
});

closePenaltyModal.addEventListener("click", () => {
  miscPenaltyInput.value = "";
  penaltyModal.classList.add("hidden");
});

document.querySelectorAll(".event-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const action = button.dataset.action;
    const eventType = button.dataset.event;
    if (action === "custom") {
      const custom = prompt("Custom event name?");
      if (!custom) return;
      await logEvent(custom);
      return;
    }
    if (action === "shot") {
      openGoalModal(eventType);
      return;
    }
    if (action === "penalty") {
      openPenaltySelector(button.dataset.penalty);
      return;
    }
    await logEvent(eventType);
  });
});

linkPlayerBtn.addEventListener("click", async () => {
  const code = playerCodeInput.value.trim().toUpperCase();
  if (!code) return;
  setLoading(true, "Linking player...");
  try {
    const { error } = await supabaseClient.rpc("link_player_by_code", {
      code,
    });
    if (error) {
      alert(error.message);
      return;
    }
    playerCodeInput.value = "";
    await syncFamilyLinks();
  } finally {
    setLoading(false);
  }
});

const renderLinkedPlayers = (players) => {
  linkedPlayers.innerHTML = "";
  if (!players.length) {
    linkedPlayers.innerHTML = `<p class="muted">No linked players yet.</p>`;
    return;
  }
  players.forEach((link) => {
    const item = document.createElement("div");
    item.className = "linked-item";
    item.innerHTML = `
      <span>${link.player?.full_name || "Player"}</span>
      <span>${link.player?.player_code || ""}</span>
    `;
    linkedPlayers.appendChild(item);
  });
};

const renderLinkedParents = (parents) => {
  linkedParents.innerHTML = "";
  if (!parents.length) {
    linkedParents.innerHTML = `<p class="muted">No linked parents yet.</p>`;
    return;
  }
  parents.forEach((link) => {
    const item = document.createElement("div");
    item.className = "linked-item";
    item.innerHTML = `
      <span>${link.parent?.full_name || "Parent"}</span>
      <span>Linked</span>
    `;
    linkedParents.appendChild(item);
  });
};

const loadLinkedPlayers = async () => {
  const { data, error } = await supabaseClient
    .from("parent_player_links")
    .select(
      "id, created_at, player:profiles!parent_player_links_player_profile_fkey(full_name, player_code)"
    )
    .eq("parent_user_id", currentUser.id)
    .order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return;
  }
  renderLinkedPlayers(data);
};

const loadLinkedParents = async () => {
  const { data, error } = await supabaseClient
    .from("parent_player_links")
    .select(
      "id, created_at, parent:profiles!parent_player_links_parent_profile_fkey(full_name)"
    )
    .eq("player_user_id", currentUser.id)
    .order("created_at", { ascending: false });
  if (error) {
    console.error(error);
    return;
  }
  renderLinkedParents(data);
};

const syncFamilyLinks = async () => {
  if (!currentProfile) return;
  linkCard.classList.remove("hidden");

  if (currentProfile.role === "Parent") {
    parentLinkSection.classList.remove("hidden");
    playerCodeSection.classList.add("hidden");
    await loadLinkedPlayers();
    return;
  }

  if (currentProfile.role === "Player") {
    parentLinkSection.classList.add("hidden");
    playerCodeSection.classList.remove("hidden");
    const { data, error } = await supabaseClient.rpc("assign_player_code");
    if (!error && data) {
      playerCodeDisplay.textContent = data;
    }
    await loadLinkedParents();
    return;
  }
};

const startSession = async (session) => {
  currentUser = session.user;
  currentProfile = await fetchProfile(currentUser.id);
  showDashboard(currentProfile);
  await loadVideos();
  await syncFamilyLinks();
};

const handleRecovery = async () => {
  if (!window.location.hash.includes("type=recovery")) return;
  if (typeof supabaseClient.auth.getSessionFromUrl === "function") {
    await supabaseClient.auth.getSessionFromUrl({ storeSession: true });
  }
  setAuthView("reset");
  setResetMode("update");
};

const init = async () => {
  await handleRecovery();
  setLoading(true, "Loading session...");
  try {
    const { data } = await supabaseClient.auth.getSession();
    if (data.session) {
      await startSession(data.session);
    } else {
      showAuth();
    }
  } finally {
    setLoading(false);
  }
  updateLocationStatus();
  updateZoomView();
};

init();
