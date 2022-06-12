import { Group, Button, Switch } from '@mantine/core';
import { PlayerSkipForward, PlayerTrackNext } from 'tabler-icons-react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  autoplayChanged,
  currentClipSkipped,
  selectAutoplayEnabled,
  selectClipLimit,
  selectNextId,
} from '../clipQueueSlice';
import { currentClipWatched, selectCurrentId } from '../clipQueueSlice';

function PlayerButtons({ className }: { className?: string }) {
  const dispatch = useAppDispatch();
  const currentClipId = useAppSelector(selectCurrentId);
  const nextClipId = useAppSelector(selectNextId);
  const clipLimit = useAppSelector(selectClipLimit);
  const autoplayEnabled = useAppSelector(selectAutoplayEnabled);
  return (
    <Group align="flex-start" className={className}>
      <Group>
        <Switch
          label="Autoplay"
          checked={autoplayEnabled}
          onChange={(event) => dispatch(autoplayChanged(event.currentTarget.checked))}
        />
        {clipLimit && (
          <Button
            variant="default"
            rightIcon={<PlayerSkipForward />}
            onClick={() => dispatch(currentClipSkipped())}
            disabled={!currentClipId}
          >
            Skip
          </Button>
        )}
      </Group>
      <Button
        rightIcon={<PlayerTrackNext />}
        onClick={() => dispatch(currentClipWatched())}
        disabled={!currentClipId && !nextClipId}
      >
        Next
      </Button>
    </Group>
  );
}

export default PlayerButtons;
