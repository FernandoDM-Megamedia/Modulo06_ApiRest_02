import React from 'react';
import { Formik, Form } from 'formik';
import {
    TextFieldComponent,
    SelectComponent,
    RatingComponent,
  } from 'common/components';
  import { Button } from '@material-ui/core';
    import { CharacterEntityVmRM } from './character.vm';
  import * as classes from './character.styles';
  // import { Lookup } from 'common/models';
  import Card from '@material-ui/core/Card';
  import CardHeader from '@material-ui/core/CardHeader/CardHeader';
  import CardContent from '@material-ui/core/CardContent';
  import CardMedia from '@material-ui/core/CardMedia';
  import CardActions from '@material-ui/core/CardActions';
  import Typography from '@material-ui/core/Typography';
  import Avatar from '@material-ui/core/Avatar/Avatar';
  
  // import * as classes from './character.styles';
  
interface Props {
  infoCharacter: CharacterEntityVmRM;
  onSave: (hotel: CharacterEntityVmRM) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { infoCharacter, onSave } = props;
  const mapEpisodes = infoCharacter?.episode.map((episode) => {
    let numberEpisode = parseInt(episode.replace( /\D+/g, ''));
    return (
        <li className={classes.episodeItem}>
          <a href={episode}>{numberEpisode}</a>
        </li>
      )
  });

  return (
    <>
      <div>
        <h2>Ficha de Personaje</h2>
      </div>
      <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{infoCharacter?.id}</Avatar>}
        title={infoCharacter?.name}
        subheader={infoCharacter?.status}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={infoCharacter?.image}
            title={infoCharacter?.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            <div className={ classes.data}>
              <span>{infoCharacter?.species}</span>
              <span>{infoCharacter?.gender}</span>
              <span>{infoCharacter?.type}</span>
              {/* <span>{infoCharacter?.location?.name}</span>
              <span>{infoCharacter?.location?.url}</span>
              <span>{infoCharacter?.origin?.name}</span>
              <span>{infoCharacter?.origin?.url}</span> */}
              <ul className={classes.episodeList}>
                {mapEpisodes}
              </ul>
            </div>
          </Typography>
          <Formik
            onSubmit={onSave}
            initialValues={infoCharacter}
            enableReinitialize={true}
          >
            {() => (
              <Form className={classes.root}>          
                <TextFieldComponent
                  name="comment"
                  label="Comment"
                  multiline={true}
                  rows={3}
                  rowsMax={5}
                />
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
              </Form>
          )}
          </Formik>
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    
    </>
  );
};
